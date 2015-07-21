var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiTreeIterator = (function () {
            function GuiTreeIterator(rootNode, currentNode) {
                this.rootNode = rootNode;
                this.currentNode = currentNode;
                this.orderInLevel = 0;
                this.depth = 0;
                this.que = new JirglStructures.Lists.Queue();
                this.que.enqueue(rootNode);
            }
            GuiTreeIterator.prototype.hasNext = function () {
                return !this.que.isEmpty();
            };
            GuiTreeIterator.prototype.next = function () {
                var node = this.que.dequeue();
                if (node.leftChild !== undefined) {
                    this.que.enqueue(node.leftChild);
                }
                if (node.rightChild !== undefined) {
                    this.que.enqueue(node.rightChild);
                }
                node.data.isCurrent = node === this.currentNode;
                return node;
            };
            GuiTreeIterator.prototype.reset = function () {
                this.que.clear();
                this.orderInLevel = 0;
                this.depth = 0;
            };
            return GuiTreeIterator;
        })();
        GuiExtender.GuiTreeIterator = GuiTreeIterator;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiTreeIterator.js.map