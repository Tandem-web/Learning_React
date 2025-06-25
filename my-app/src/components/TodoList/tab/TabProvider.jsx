import { useMemo, useState, useEffect } from "react";
import { LOCAL_STORAGE_TAB_KEY, TabContext } from "./TabContext"

const defaultTab = localStorage.getItem(LOCAL_STORAGE_TAB_KEY) || 'all';

const TabProvider = ({children}) => {
    const [tab, setTab] = useState(defaultTab)

    const defaultProps = useMemo(() => ({
        tab: tab,
        setTab: setTab 
    }), [tab])

    const changeTab = (tabName) => {
        setTab(tabName);
        localStorage.setItem(LOCAL_STORAGE_TAB_KEY, tabName);
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TAB_KEY, tab);
    }, [tab]);

    return(
        <TabContext.Provider value={{...defaultProps, changeTab}}>
            {children}
        </TabContext.Provider>
    )
}

export default TabProvider