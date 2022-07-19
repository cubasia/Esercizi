import cors from "cors";

export function intCorsMiddleware() {

const corsOptions = {
  origin: "http://localhost:8081",
};    
    
return cors(corsOptions)
    
}
