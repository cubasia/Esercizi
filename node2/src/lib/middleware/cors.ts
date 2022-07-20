import cors from "cors";

export function intCorsMiddleware() {

const corsOptions = {
  origin: "http://localhost:8081",
  credentials: true
};    
    
return cors(corsOptions)
    
}
