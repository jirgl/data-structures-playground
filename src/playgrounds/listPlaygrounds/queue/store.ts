import { action, observable } from 'mobx';
import { IAction } from '../../../components/controlBar';
import { Structure } from './graphicalStructure';
import { ListIterator } from '../base/listIterator';

class StackStore {
    actions: IAction[] = [
        { title: 'enqueue' },
        { title: 'dequeue' }
    ];

    private structureFunctions: { [action: string]: (content?: string) => void };
    private structure: Structure;
    @observable iterator: ListIterator;
    @observable selectedAction: number = 0;

    constructor() {
        this.structure = new Structure();
        this.structure.enqueue('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'enqueue': (content: string) => this.structure.enqueue(content),
            'dequeue': () => this.structure.dequeue()
        };
    }

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
    }

    @action.bound
    execute(content?: string) {
        const action = this.actions[this.selectedAction].title;
        this.structureFunctions[action](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new StackStore();