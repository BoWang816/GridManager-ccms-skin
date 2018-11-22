/**
 * Created by baukh on 18/3/8.
 */
import '../../node_modules/gridmanager/css/gm.css';
import controller from './controller';

const template = '<table></table>';
export const GridManagerComponent = {
    controller,
    template,
    controllerAs: 'vm',
    bindings: {
        option: '<'
    }
};

export default angular
    .module('gridManagerAngular', [])
    .component('gridManager', GridManagerComponent)
    .name;
