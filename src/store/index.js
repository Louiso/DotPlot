import { observable } from 'mobx';
class store{
    @observable resultado = false;
    @observable ella = '';
    @observable yo = '';
}

export default new store();