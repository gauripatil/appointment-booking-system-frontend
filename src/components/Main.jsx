import React from "react";
import Container  from 'react-bootstrap/Container';
import { MemoryRouter, Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./Dashboard";
import AppointmentBooking from "./AppointmentBooking";
import CurrentToken from "./CurrentToken";
import SignIn from "./SignIn";

function Main() {
    return (
        <main className="main">
            <BrowserRouter>
                <Container className="col-md-7">
                    <Routes>
                        <Route path="/" element={<Dashboard />}></Route>
                        <Route path="/sign-in" element={<SignIn />}></Route>
                        <Route path="/current-token" element={<CurrentToken />}></Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </main>
    )
}

export default Main;