import React from "react";
import Container  from 'react-bootstrap/Container';
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import AppointmentBooking from "./AppointmentBooking";
import CurrentToken from "./CurrentToken";

function Main() {
    return (
        <main className="main justify-content-center">
            <MemoryRouter>
                <Container className="col-md-7">
                    <Routes>
                        <Route path="/" element={<Dashboard />}></Route>
                        <Route path="/book-appointment" element={<AppointmentBooking />}></Route>
                        <Route path="/current-token" element={<CurrentToken />}></Route>
                    </Routes>
                </Container>
            </MemoryRouter>
        </main>
    )
}

export default Main;