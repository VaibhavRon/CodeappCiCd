import { Socket } from "socket.io";

type SocketId = string;

enum SocketEvent {
  JOIN_REQUEST = "join-request",
  JOIN_ACCEPTED = "join-accepted",
  USER_JOINED = "user-joined",
  USER_DISCONNECTED = "user-disconnected",
  SYNC_FILE_STRUCTURE = "sync-file-structure",
  DIRECTORY_CREATED = "directory-created",
  DIRECTORY_UPDATED = "directory-updated",
  DIRECTORY_RENAMED = "directory-renamed",
  DIRECTORY_DELETED = "directory-deleted",
  FILE_CREATED = "file-created",
  FILE_UPDATED = "file-updated",
  FILE_RENAMED = "file-renamed",
  FILE_DELETED = "file-deleted",
  ALLOW_WRITE = "allow-write",
  DISALLOW_WRITE = "disallow-write",
  NOTIFY_WRITE = "notify-write",
  NOTIFY_UNWRITE = "notify-unwrite",
  USER_OFFLINE = "offline",
  USER_ONLINE = "online",
  SEND_MESSAGE = "send-message",
  RECEIVE_MESSAGE = "receive-message",
  TYPING_START = "typing-start",
  TYPING_PAUSE = "typing-pause",
  USERNAME_EXISTS = "username-exists",
  REQUEST_PENDING = "request-pending",
  KICK_USER = "kick-user",
  USER_KICKED = "user-kicked",
  GOT_KICKED = "got-kicked",
  REQUEST_DRAWING = "request-drawing",
  SYNC_DRAWING = "sync-drawing",
  DRAWING_UPDATE = "drawing-update"
}

interface SocketContext {
  socket: Socket;
}

export { SocketEvent, SocketContext, SocketId };
