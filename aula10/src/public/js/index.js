const socket = io();

socket.emit('message', 'Olá, está coumincação está sendo feita a partir de websocket')

socket.on('event_for_individual_socket', data => {
    console.log(data);
})

socket.on('event_for_everyone_but_the_current_socket', data => {
    console.log(data);
})

socket.on('event_for_all', data => {
    console.log(data);
})