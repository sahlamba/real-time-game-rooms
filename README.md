# Multiplayer Real-time Game Rooms (boilerplate)

NodeJs + Socket.io based muliplayer real-time game rooms with a ReactJs frontend.

## Features
1. Game room creation with unique session code (configurable no. of players per room).
2. Every player can simultaneously join multiple rooms.
3. Every player can join game and ready oneself (two independent player states).
4. Only admin (creator) of the game room can start game after all players have joined and are ready.
5. Every player can submit gameplay input in real time (not turn-based).
6. Well-defined extensible Game and Player models.
7. Decoupled components: Client/UI, API server, Socket event listeners, Game engine with in-memory DB.
8. User (player) creation is done on client-side and persisted in browser's local storage.
9. The server only validates if player.id is null or not (minimal player auth/validation).
