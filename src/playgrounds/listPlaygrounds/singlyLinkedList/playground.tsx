import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { Canvas } from '../../../components/canvas/canvas';
import { ControlBar } from '../../../components/controlBar';
import { ListGrid } from '../listGrid';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const SinglyLinkedListPlayground = observer(() =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            settings={store.settings}
            onActionChange={store.setAction}
            onSettingsChange={store.setSettings}
            selectedActionValue={store.selectedAction}
            selectedSettingsValue={store.selectedSettings}
        />
        <Canvas
            arrowType={ArrowType.DirectOneWay}
            currentIndex={0}
            grid={new ListGrid(window.document.documentElement.clientWidth)}
            iterator={store.getIterator()}
            width={window.document.documentElement.clientWidth}
        />
    </Block>
);