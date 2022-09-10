import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//taller
import { Taller01 } from './Taller01';

//chalenges
import FirstApp from './Challenges/M1E1';
import AdvancedCounter from './Challenges/M2E1';
import CreateItemArray from './Challenges/M2E2';
import M2E3 from './Challenges/M2E3/M2E3';
import UseFetch from './Challenges/M2E4/M2E4';
import M2E5 from './Challenges/M2E5';
import Father from './Challenges/M2E6/M2E6';

//modulo 1: repaso
import Variables from './CONTENIDO/ModuloUno/variables/variables';
import CopyMode from './CONTENIDO/ModuloUno/tiposDeCopiados/copyObject';
import TiposFunciones from './CONTENIDO/ModuloUno/tiposDeFunciones/TiposFunction'
import Promesas from './CONTENIDO/ModuloUno/Promesas/promesas';
import Tenarios from './CONTENIDO/ChequeosTenarios/Tenary';

//modulo 2: react basico
import VarComponent from './CONTENIDO/varComp';
import PropComponent from './CONTENIDO/propsComp';
import FuncComponent from './CONTENIDO/functComp';
import UseStateHook from './Hooks/UseState';
import PrintLArray from './CONTENIDO/printArray';
import AdvancedCategory from './CONTENIDO/comunChildParent/AdvancedCategory';
import UseEffectHook from './Hooks/UseEffect';
import AdvancedCounterHooked from './CONTENIDO/CustomHook/AdvancedCounterHooked';
import {FocusScreen} from './Hooks/UseRef';
import FuncionMemo from './Hooks/UseMemo/Memo';
import HookUseMemo from './Hooks/UseMemo/UseMemo';
import './CONTENIDO/Reducer/intro-reducer'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
    <Taller01/>
    */}

    <h2>Challenges</h2>
    {/*<FirstApp/>
    <AdvancedCounter/> <AdvancedCounter value={10}/>
    <CreateItemArray/>
    <M2E3 category="pokemon"/>
    <AdvancedCounterHooked value={10} increment={10}/>
    <UseFetch url="https://breakingbadapi.com/api/quotes/1"/>
    <M2E5 url="https://breakingbadapi.com/api/quotes/1"/>
    
    <Father/> NO TERMINADO */}
    
    <hr/>
    <h2>Modulo Uno - Basic JS</h2>
    {/* ** MODULO UNO: Repaso - ESTUDIO ** */}
    {/*<Variables/>
    <CopyMode/>
    <TiposFunciones/>
    <Promesas/>
    <Tenarios/>*/}
    <hr/>
    <h2>Modulo Dos - Basic React</h2>
    {/* ** MODULO DOS: React inicio - ESTUDIO ** */}
    {/*<VarComponent/>
    <PropComponent/>
    <PropComponent title="Mi titulo desde Props" sum={5}/>.
    <FuncComponent title="Mi titulo desde Props" sum={5}/>
    <UseStateHook value={0}/>
    <PrintLArray/>
    <AdvancedCategory/>
    <UseEffectHook category="asdf"/>*/}
    {/*ver funcionamiento de barriles en AdvancedCategory */}
    {/*<FocusScreen/>
    <FuncionMemo/>
    NO TERMNADO CALLBACK
    <HookUseMemo/>*/}
    
  </React.StrictMode>
);