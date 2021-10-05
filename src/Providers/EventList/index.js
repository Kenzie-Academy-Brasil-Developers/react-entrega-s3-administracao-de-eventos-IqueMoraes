import { createContext, useState } from "react";
import axios from "axios";

const EventListContext = createContext();

export const EventListProvider = ({children}) => {

    const [eventList, setEventList] = useState({});

    return (
        <EventListContext.Provider value={{eventList, setEventList}}>
            {children}
        </EventListContext.Provider>
    )
};