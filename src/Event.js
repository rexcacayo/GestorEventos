export default class Event{
// implement your code here...
    constructor(){
        this.eventoPermitido = new Array();    
    }

    set Eventos(element){
        this.eventoPermitido.push(element);
    }

    get Eventos(){
        return this.eventoPermitido;
    }

    FormatEvento(tipo,mensaje){
        const event = {
            type: tipo, 
            message: mensaje    
        };
        return event;
    }

    temporizador(){
        return new Promise(resolve => {
            setTimeout(() => {
              resolve('Enviar evento');
            }, 1000);
          });
    }

    aviso(h){
            this.eventoPermitido.forEach(evento =>  {
                if(evento.second == h){
                    const permiso = this.FormatEvento(evento.type,evento.message);
                    this.mostrarInfo(h, permiso);
                }
                
            });
            
    }

    
    async publicidad(){
        this.eventoPermitido.sort();
        const maxTime = this.eventoPermitido[this.eventoPermitido.length - 1].second;
        for (var i = 0; i <= maxTime; i++) {
            await this.temporizador();
            this.aviso(i);
        }
    }

    mostrarInfo(time,EventoSelecionado){

        console.log(`At second ${time}: ${JSON.stringify(EventoSelecionado)}`);
        

    }

   
};