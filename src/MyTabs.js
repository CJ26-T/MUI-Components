import React, { useState } from "react";
import {
        AppBar, Toolbar, Button, Typography, Tabs, Tab,
} from "@mui/material";

const MyTabs = () => {
    const [value, setValue] = useState();

    return(
        <>
            <Tabs
            indicatorColor="primary"
            textColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
            >
                <Tab label="1"></Tab>
                <Tab label="2"></Tab>
                <Tab label="3"></Tab>
            </Tabs>
        </>
    )
};

export default MyTabs;
