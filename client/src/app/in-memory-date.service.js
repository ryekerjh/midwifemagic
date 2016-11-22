"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var midwives = [
            { id: 2, name: 'Jenny TerribleMidWife' },
            { id: 3, name: 'Serena Schmoe' },
            { id: 4, name: 'Regina Magiclandia' },
            { id: 5, name: 'Detra Regi' },
            { id: 6, name: 'Hannah Cossack' }
        ];
        return { midwives: midwives };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-date.service.js.map