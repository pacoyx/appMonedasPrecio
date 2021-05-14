
import { Blockchain } from './blockchain/blockchain.model';
import { PersonajesState } from './rickandmortylist/rick.reducer';
import * as ui from './shared/ui.reducer';

export interface AppState {
   blockchain: Blockchain[];
   auth: string;
   ui: ui.State;
   rick: PersonajesState;
}
