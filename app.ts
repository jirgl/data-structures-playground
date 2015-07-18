﻿/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.vg.d.ts" />
/// <reference path="models/doublylinkedlist.ts" />
/// <reference path="components/header.ts" />
/// <reference path="components/controlpanel.ts" />
/// <reference path="structureComponents/doublyList.ts" />

module JirglStructures {
    b.init(() => {
        return [
            header({ content: "Data structures", size: HeaderSize.H1 }),
            header({ content: "Lists", size: HeaderSize.H2 }),
            header({ content: "Doubly linked list", size: HeaderSize.H3 }),
            doublyList({}),
            header({ content: "Trees", size: HeaderSize.H2 }),
            header({ content: "Binary tree", size: HeaderSize.H3 }),
            header({ content: "Binary search tree", size: HeaderSize.H3 }),
            header({ content: "Graphs", size: HeaderSize.H2 })
        ];
    });
}