import EventManager from './EventManager';
import Event from './Event';
import "@babel/polyfill";

export default class EventManagerFactory{
    
    
    
    
    static create(events, types) {
        // implement your code here...
        var ev = new Event();
        events.forEach(element =>  {
            const eventObj = element.type;
            var idx = types.indexOf(eventObj);
            while (idx != -1) {
                ev.Eventos = element;
                idx = types.indexOf(eventObj, idx + 1);
            }
            
        });
        ev.publicidad();
        return new EventManager();
    }
    
    

    

    

    

    
};