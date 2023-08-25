'use client';

import { useEffect, useRef, useState } from "react";
import { useMap } from "../hooks/useMap";
import useSWR from "swr";
import { fetcher } from "../utils/http";
import { Route } from "../utils/models";
import { socket } from "../utils/socket-io";
import { Typography, Button, Snackbar, Alert, Select, NativeSelect } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import SelectInput from "@mui/material/Select/SelectInput";

export function DriverPage(){
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapContainerRef);
  const [open, setOpen] = useState(false);

  const {
    data: routes, 
    error, 
    isLoading
  } = useSWR<Route[]>("http://localhost:3000/routes", fetcher,{
    fallbackData: [],
  });

  
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  async function startRoute() {
    const routeId = (document.getElementById("route") as HTMLSelectElement).value;
    const response = await fetch(`http://localhost:3000/routes/${routeId}`);
    const route: Route = await response.json();
    map?.removeAllRoutes();
    await map?.addRouteWithIcons({
      routeId: routeId,
      startMarkerOptions: {
        position: route.directions.routes[0].legs[0].start_location,
      },
      endMarkerOptions: {
        position: route.directions.routes[0].legs[0].end_location,
      },
      carMarkerOptions: {
        position: route.directions.routes[0].legs[0].start_location,
      }
    });

    const { steps } = route.directions.routes[0].legs[0];
    setOpen(true);

    for(const step of steps){
      await sleep(2000);
      map?.moveCar(routeId, step.start_location);
      socket.emit('new-points', {
        route_id: routeId,
        lat: step.start_location.lat,
        lng: step.start_location.lng,
      })

      await sleep(2000);
      map?.moveCar(routeId, step.end_location);
      socket.emit('new-points', {
        route_id: routeId,
        lat: step.end_location.lat,
        lng: step.end_location.lng,
      })

    }

  }

  return (
    <Grid2 container sx={{ display: "flex", flex: 1 }}>
      <Grid2 xs={4} px={2}>
        <Typography variant="h4">Micha viagem</Typography>
        <NativeSelect id="route" fullWidth>
          {isLoading && <option>Carregando rotas...</option>}
            {routes!.map((route) => (
                <option key={route.id} value={route.id}>
                  {route.name}
                </option>
            ))}
        </NativeSelect>
        <Button type="submit" onClick={startRoute} variant="contained" fullWidth sx={{ mt: 1 }} >Iniciar a viagem</Button>
      </Grid2>
      <Grid2 id="map" xs={8} ref={mapContainerRef}>
      </Grid2>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Viagem iniciada
        </Alert>
      </Snackbar>
      {/* <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Viagem concluida
        </Alert>
      </Snackbar> */}
    </Grid2>
  );
}

export default DriverPage;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));