import React from 'react';
import styles from './App.module.css';
import {EditorProvider} from '../provider/EditContext';
import CodeBar from "../components/CodeBar/CodeBar";
import Header from "../components/Header/Header";
import Prevview from "../components/Prevview/Prevview";
import {TabProvider} from "../provider/TabContext";

function App() {
  return (
      <EditorProvider>
          <TabProvider>
              <div className={styles.main}>
                  <CodeBar/>
                  <div className={styles.content_wrap}>
                      <Header/>
                      <Prevview/>
                  </div>
              </div>
          </TabProvider>
      </EditorProvider>
  );
}

export default App;
