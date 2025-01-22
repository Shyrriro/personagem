let main_character_level = 51

let characters = {
    main_character:{
        name: 'Alexandre',
        class: 'Prime Knight',
        initial_level: 1,
        basic_status: {
            health: ['HP', 97],
            mana: ['MP', 0],
            special:['SP', 47],
            vitality:['Vitalidade' ,9],
            strength: ['Força' ,7],
            physical_defense: ['Defesa Física' ,5],
            magic_defense: ['Defesa Mágica' ,3],
            agility: ['Agilidade' ,8],
            wisdom: ['Sabedoria' ,3],
            luck: ['Sorte' ,4],
        },
        attributes:{
            attribute: ['Darkness', 'Ice'], // Atributo tipo do personagem neste caso ['Trevas ' e 'Gelo']
            weaknesses: ['Poison', 'Fire', 'Light'] // Fraqueza ['Veneno', 'Fogo' e 'Luz']
        },
        special_ability: { //['Nome da habilidade' 'Nome da habilidade em pt', Level para ser obtido, força da habilidade com base no level para obter vezes level do personagem]
            abilities_damage: {
                tetsu_no_ryuu: ['Tetsu no Ryuu', 'Corte do Dragão de Ferro', 1, (10 * main_character_level)],
            },
            abilities_buff: {
                infernal_fear: ['Infernal Fear', 'Medo Infernal', 50, 2],
            },
        },
        history: 'Alexandre foi um guerreiro de Death Valley há muito, muito tempo. Seu nome era lendário e seus feitos em batalha foram recontados em livros de história. Certa vez, ele sozinho evitou um ataque de 100 inimigos, uma história contada até mesmo para crianças. Ele rejeitou todos os títulos e prêmios concedidos a ele pela nobreza e deixou a reino para buscar seus próprios objetivos. Durante sua jornada, ele encontrou as ruínas de uma cidade antiga e desapareceu. Depois de um ano, ele foi dado como morto e todo o reino lamentou a morte do lendário herói.'
    },
};

console.log(characters.main_character.history);
console.log(`${characters.main_character.name}:`);
console.log(`Level: ${main_character_level}`);
console.log(`/// STATUS BÁSICO ///`);
// Aqui o status do personagem serão exibidos e aumenta de acordo com o level do personagem * status básico.
Object.keys(characters.main_character.basic_status).forEach(status => {console.log(`${characters.main_character.basic_status[status][0]}: ${characters.main_character.basic_status[status][1] * main_character_level}`);});
// Estes são todos atributos do personagem
console.log(`/// ATRIBUTOS ///`);
console.log(`Tipo: ${characters.main_character.attributes.attribute}`);
// Aqui quando o personagem atingir o level 40 ele irá ganhar uma nova habilidade.
if (main_character_level >= 10 ){
    Object.assign(characters.main_character.special_ability.abilities_damage, {tiger_hunter: ['Tiger Hunter', 'Caçadora de Tigreo', 10, (15 * main_character_level)]});
}
if (main_character_level >= 25 ){
    Object.assign(characters.main_character.special_ability.abilities_damage, {koori_ryuu: ['Koori Ryuu', 'Corte do Dragão de Gelo', 25, (20 * main_character_level)]});
}
if (main_character_level >= 35 ){
    Object.assign(characters.main_character.special_ability.abilities_damage, {mugetsu: ['Mugetsu', 'Céu sem Lua', 35, (30 * main_character_level)]});
}
if (main_character_level >= 40 ){
    Object.assign(characters.main_character.special_ability.abilities_damage, {tatsumaki:['Tasumaki', 'Tonado', 45, (40 * main_character_level)]});
}
if (main_character_level == 99 ){
    Object.assign(characters.main_character.special_ability.abilities_damage, {kamigoroshi_no_arashi: ['Kamigoroshi no Arashi', 'Tempestade Destruidora de deuses', 99, (94 * main_character_level)]});
}
/* Abaixo é o dano final que a habilidade irá causar. O resultado é level da habilidade vezes level atual e level atual vezes força então soma o total de.
Exemplo: Tetsu no Ryuu vezes level atual 15 x 10 = 150 // Força basica vezes level atual   7 x 15 = 105
soma resulatado de ambas 150 + 105 = 255 dano final, quanto maior o level maior o dano da habilidade.*/
console.log(`/// HABILIDADES ESPECIAIS ///`);
Object.keys(characters.main_character.special_ability.abilities_damage).forEach(special_ability => {console.log(`${characters.main_character.special_ability.abilities_damage[special_ability][0]}: ${characters.main_character.special_ability.abilities_damage[special_ability][3] + (main_character_level * characters.main_character.basic_status.strength[1])} Damage`);});
// Aqui força, defesa física e defesa Mágica serão dobrado asssim que a habilidade de buff for ativada.
Object.keys(characters.main_character.special_ability.abilities_buff).forEach(special_ability => {
    console.log(`${characters.main_character.special_ability.abilities_buff[special_ability][0]}: Quando ativado dobra os status Força, Defesa Física, Defesa Mágica e Agilidade.`);
    console.log(`Força: +${characters.main_character.special_ability.abilities_buff[special_ability][3] * (main_character_level * characters.main_character.basic_status.strength[1])} Up`);
    console.log(`Defesa Física: +${characters.main_character.special_ability.abilities_buff[special_ability][3] * (main_character_level * characters.main_character.basic_status.physical_defense[1])} Up`);
    console.log(`Defesa Mágica: +${characters.main_character.special_ability.abilities_buff[special_ability][3] * (main_character_level * characters.main_character.basic_status.magic_defense[1])} Up`);
});


const buff_strenght = characters.main_character.basic_status.strength[1] * main_character_level * characters.main_character.special_ability.abilities_buff.infernal_fear[3];
const buff_physical_defense = characters.main_character.basic_status.magic_defense[1] * main_character_level * characters.main_character.special_ability.abilities_buff.infernal_fear[3];
const buff_magical_defense = characters.main_character.basic_status.physical_defense[1] * main_character_level * characters.main_character.special_ability.abilities_buff.infernal_fear[3];
const buff_agility = characters.main_character.basic_status.agility[1] * main_character_level * characters.main_character.special_ability.abilities_buff.infernal_fear[3];

characters.main_character.basic_status.strength[1] = (buff_strenght * main_character_level) - (buff_strenght * main_character_level) + characters.main_character.basic_status.strength[1] * 2;
characters.main_character.basic_status.physical_defense[1] = (buff_physical_defense * main_character_level) - (buff_physical_defense * main_character_level) + characters.main_character.basic_status.physical_defense[1] * 2;
characters.main_character.basic_status.magic_defense[1] = (buff_magical_defense * main_character_level) - (buff_magical_defense * main_character_level) + characters.main_character.basic_status.magic_defense[1] * 2;
characters.main_character.basic_status.agility[1] = (buff_agility * main_character_level) - (buff_agility * main_character_level) + characters.main_character.basic_status.agility[1] * 2;

// Aqui a habilidade Infernal Fear foi ativada buffando os status basicos de defesas e força.
console.log(`/// STATUS BÁSICO FORAM BUFFADOS PELA HABILIDADE INFERNAL FEAR!!! ///`);
Object.keys(characters.main_character.basic_status).forEach(status => {console.log(`${characters.main_character.basic_status[status][0]}: ${characters.main_character.basic_status[status][1] * main_character_level}`);});