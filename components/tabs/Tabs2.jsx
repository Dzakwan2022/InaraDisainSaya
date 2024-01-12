import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
function Tabs2() {
  return (
    <Tabs>
        <TabList>
            <Tab>
                Content
            </Tab>
            <Tab>
                Content 2
            </Tab>
        </TabList>
        <TabPanel>
            <h2>
                Any Content 1
            </h2>
        </TabPanel>
        <TabPanel>
            <h2>
                Any Content 2
            </h2>
        </TabPanel>
    </Tabs>
  
  
  )
}

export default Tabs2