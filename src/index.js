import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import {ArqueiroMago} from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoRadagast = new Mago('Radagast','ar', 7, 7)
const magoSaruman = new Mago('Saruman', 'fogo', 8, 9)
const arqueiroLegolas = new Arqueiro('Legolas', 10)
const arqueiroMagoGandalf = new ArqueiroMago('Gandalf', 7, 10, 'trovão', 4, 8)
const guerreiroAragorn = new Guerreiro('Aragorn', 9)
const guerreiroZeus = new Guerreiro('Zeus', 10)
const arqueiroRobinHood = new Arqueiro('Robbin Hood', 6)
const arqueiroMagoEd = new ArqueiroMago('Ed', 10, 'psíquico', 10, 10)
const personagens = [magoSaruman, guerreiroZeus, arqueiroLegolas, magoRadagast,arqueiroMagoGandalf, guerreiroAragorn,  arqueiroRobinHood, arqueiroMagoEd]

new PersonagemView(personagens).render()

