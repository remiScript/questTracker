/* A quest log, one that separates quests by different zones/tags/attributes
Elwynn Forest: 
    Kill Boars
    Find Defias Hideout
    Deliver goods to innkeeper
    Slay hogger
Ironforge
    Talk to king
    Create 4 copper hammers

Players can add their own quests, add tags, and filter the questlog by tags




add filter and sort buttons near the search
sort functionality needs to be fixed:
    it should sort whatever is in dom, not refresh whole list
create custom quests (factory functions? constructors? classes?)
create mobile view (run SOLID principles against your code!)
clean up code
make quantity counters for collection quests

DONE -> merge populate and populate filtered into one function (too similar to each other)
DONE -> remove any existing or complete quests from the quest list that populates in "add quest"

*/

let questBank = { 
        "quests": [
            {"level": 5, "name": "Lost Tools", "description": "Help the blacksmith find his lost tools in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Collecting Items"},
            {"level": 6, "name": "Spider Infestation", "description": "Clear out the spider infestation in Northshire Abbey cellar.", "zone": "Elwynn Forest", "type": "Combat"},
            {"level": 7, "name": "Restoring the Light", "description": "Help the priest restore the Light to the Darkened Bank in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Recovering Artifacts"},
            {"level": 8, "name": "Wolves at the Gates", "description": "Protect the farmers from wolf attacks in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Defending NPCs"},
            {"level": 9, "name": "The Missing Mallet", "description": "Find the blacksmith's missing mallet in Loch Modan.", "zone": "Loch Modan", "type": "Collecting Items"},
            {"level": 10, "name": "Red Linen Goods", "description": "Collect red linen goods for the tailor in Stormwind City.", "zone": "Stormwind City", "type": "Collecting Items"},
            {"level": 10, "name": "The Defias Brotherhood", "description": "Defeat the Defias gang members.", "zone": "Westfall", "type": "Combat"},
            {"level": 11, "name": "Kobold Candles", "description": "Collect kobold candles for the alchemist in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Collecting Items"},
            {"level": 12, "name": "Wanted: Hogger", "description": "Eliminate the notorious bandit Hogger.", "zone": "Elwynn Forest", "type": "Combat"},
            {"level": 12, "name": "Protecting the Herd", "description": "Protect the kodo herd from predators in Northern Barrens.", "zone": "Northern Barrens", "type": "Defending NPCs"},
            {"level": 13, "name": "Cleaning Up the Coastline", "description": "Clean up the coastline from debris in Westfall.", "zone": "Westfall", "type": "Collecting Items"},
            {"level": 14, "name": "WANTED: Murlocs", "description": "Eliminate the murloc threat near the riverbank in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Combat"},
            {"level": 15, "name": "The Jasperlode Mine", "description": "Collect ore samples from the mine.", "zone": "Elwynn Forest", "type": "Collecting Items"},
            {"level": 15, "name": "A Threat Within", "description": "Investigate and eliminate the internal threat.", "zone": "Stormwind City", "type": "Classes (Warrior)"},
            {"level": 15, "name": "Lost Necklace", "description": "Help the farmer find his lost necklace in Westfall.", "zone": "Westfall", "type": "Recovering Items"},
            {"level": 16, "name": "Cleaning Up the Mines", "description": "Clear out the vermin from the mine in Loch Modan.", "zone": "Loch Modan", "type": "Combat"},
            {"level": 17, "name": "Stolen Supplies", "description": "Retrieve the stolen supplies from the bandits in Redridge Mountains.", "zone": "Redridge Mountains", "type": "Collecting Items"},
            {"level": 18, "name": "The Disappearing Farmer", "description": "Investigate the disappearing farmers in Westfall.", "zone": "Westfall", "type": "Investigation"},
            {"level": 19, "name": "Cleaning Up the Farmlands", "description": "Clean up the farmlands from pests in Westfall.", "zone": "Westfall", "type": "Combat"},
            {"level": 20, "name": "The Missing Shipment", "description": "Find the missing shipment of goods in Duskwood.", "zone": "Duskwood", "type": "Investigation"},
            {"level": 20, "name": "Elixirs for the Bladeleafs", "description": "Brew elixirs for the Bladeleafs.", "zone": "Teldrassil", "type": "Professions (Alchemy)"},
            {"level": 21, "name": "The Haunted Mills", "description": "Investigate the haunted mills in Redridge Mountains.", "zone": "Redridge Mountains", "type": "Investigation"},
            {"level": 22, "name": "Tools of the Trade", "description": "Collect tools of the trade for the blacksmith in Redridge Mountains.", "zone": "Redridge Mountains", "type": "Collecting Items"},
            {"level": 23, "name": "The Stolen Caravan", "description": "Retrieve the stolen caravan in Duskwood.", "zone": "Duskwood", "type": "Rescue Mission"},
            {"level": 24, "name": "The Disappearing Prospector", "description": "Investigate the disappearing prospector in Stranglethorn Vale.", "zone": "Stranglethorn Vale", "type": "Investigation"},
            {"level": 25, "name": "The Barrens Oases", "description": "Explore the oases in The Barrens.", "zone": "The Barrens", "type": "Travel"},
            {"level": 25, "name": "Rat Infestation", "description": "Clear out the rat infestation in Stormwind City sewers.", "zone": "Stormwind City", "type": "Combat"},
            {"level": 26, "name": "Forgotten Artifacts", "description": "Recover forgotten artifacts from the ruins in Duskwood.", "zone": "Duskwood", "type": "Recovering Artifacts"},
            {"level": 27, "name": "Bounty on Gnolls", "description": "Collect bounties on gnolls in Redridge Mountains.", "zone": "Redridge Mountains", "type": "Combat"},
            {"level": 28, "name": "The Missing Diplomat", "description": "Investigate the disappearance of a diplomat in Stormwind City.", "zone": "Stormwind City", "type": "Investigation"},
            {"level": 29, "name": "Protecting the Caravan", "description": "Protect the caravan from bandit attacks in Stranglethorn Vale.", "zone": "Stranglethorn Vale", "type": "Defending NPCs"},
            {"level": 30, "name": "Wailing Caverns", "description": "Explore the Wailing Caverns dungeon.", "zone": "The Barrens", "type": "Dungeons"},
            {"level": 30, "name": "The Deadmines", "description": "Explore The Deadmines dungeon.", "zone": "Westfall", "type": "Dungeons"},
            {"level": 30, "name": "Ragefire Chasm", "description": "Explore Ragefire Chasm dungeon.", "zone": "Orgrimmar", "type": "Dungeons"},
            {"level": 30, "name": "The Corrupted Heart", "description": "Retrieve the corrupted heart from the demon in Ashenvale.", "zone": "Ashenvale", "type": "Collecting Items"},
            {"level": 31, "name": "Goblin Trouble", "description": "Solve the goblin trouble in Booty Bay.", "zone": "Stranglethorn Vale", "type": "Investigation"},
            {"level": 32, "name": "The Missing Courier", "description": "Find the missing courier in Hillsbrad Foothills.", "zone": "Hillsbrad Foothills", "type": "Investigation"},
            {"level": 33, "name": "Pirate Threat", "description": "Eliminate the pirate threat near the coast of Stranglethorn Vale.", "zone": "Stranglethorn Vale", "type": "Combat"},
            {"level": 34, "name": "Cultist Conspiracy", "description": "Uncover the cultist conspiracy in Duskwood.", "zone": "Duskwood", "type": "Investigation"},
            {"level": 35, "name": "WANTED: Lieutenant Fangore", "description": "Hunt down Lieutenant Fangore in Silverpine Forest.", "zone": "Silverpine Forest", "type": "Combat"},
            {"level": 35, "name": "The Dark Iron Dwarves", "description": "Defeat the Dark Iron dwarves in the Searing Gorge.", "zone": "Searing Gorge", "type": "Combat"},
            {"level": 36, "name": "The Missing Journal", "description": "Find the missing journal of an explorer in Stranglethorn Vale.", "zone": "Stranglethorn Vale", "type": "Recovering Items"},
            {"level": 37, "name": "Haunted Ruins", "description": "Investigate the haunted ruins in Arathi Highlands.", "zone": "Arathi Highlands", "type": "Investigation"},
            {"level": 38, "name": "The Ogre Threat", "description": "Eliminate the ogre threat in Dustwallow Marsh.", "zone": "Dustwallow Marsh", "type": "Combat"},
            {"level": 39, "name": "The Missing Alchemist", "description": "Find the missing alchemist in Feralas.", "zone": "Feralas", "type": "Investigation"},
            {"level": 40, "name": "Cursed Artifacts", "description": "Collect cursed artifacts for a researcher in Tanaris.", "zone": "Tanaris", "type": "Collecting Items"},
            {"level": 40, "name": "The Fargodeep Mine", "description": "Collect rare minerals from the Fargodeep Mine in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Collecting Items"},
            {"level": 40, "name": "The Hunter's Path", "description": "Follow the path of the hunter in Teldrassil.", "zone": "Teldrassil", "type": "Classes (Hunter)"},
            {"level": 41, "name": "The Elemental Menace", "description": "Defeat the elemental menace in Un'Goro Crater.", "zone": "Un'Goro Crater", "type": "Combat"},
            {"level": 42, "name": "The Shadowy Figure", "description": "Investigate the shadowy figure in Dustwallow Marsh.", "zone": "Dustwallow Marsh", "type": "Investigation"},
            {"level": 43, "name": "Giant Problems", "description": "Solve the giant problems in Feralas.", "zone": "Feralas", "type": "Combat"},
            {"level": 44, "name": "The Pirate Captain", "description": "Defeat the notorious pirate captain in Tanaris.", "zone": "Tanaris", "type": "Combat"},
            {"level": 45, "name": "The Alliance Needs Iron Bars!", "description": "Mine iron bars for the Alliance in Ironforge.", "zone": "Ironforge", "type": "Professions (Mining)"},
            {"level": 50, "name": "The Glowing Shard", "description": "Retrieve a glowing shard from the depths of Darkshore.", "zone": "Darkshore", "type": "Collecting Items"},
            {"level": 50, "name": "The Bloodsail Buccaneers", "description": "Eliminate the Bloodsail Buccaneers in Stranglethorn Vale.", "zone": "Stranglethorn Vale", "type": "Combat"},
            {"level": 55, "name": "Rellian Greenspyre", "description": "Defeat Rellian Greenspyre and his minions in Darkshore.", "zone": "Darkshore", "type": "Combat"},
            {"level": 55, "name": "Thelsamar Blood Sausages", "description": "Gather ingredients for Thelsamar Blood Sausages in Loch Modan.", "zone": "Loch Modan", "type": "Collecting Items"},
            {"level": 60, "name": "The Hunter's Charm", "description": "Obtain the Hunter's Charm for tracking beasts in Teldrassil.", "zone": "Teldrassil", "type": "Classes (Hunter)"},
            {"level": 60, "name": "Snatch and Grab", "description": "Retrieve stolen items from the thieves in Westfall.", "zone": "Westfall", "type": "Collecting Items"},
            {"level": 60, "name": "The Battle for Arathi Basin!", "description": "Participate in the battle for Arathi Basin in Arathi Highlands.", "zone": "Arathi Highlands", "type": "PvP"},
            {"level": 60, "name": "Wanted: Arnak Grimtotem", "description": "Hunt down Arnak Grimtotem in Thousand Needles.", "zone": "Thousand Needles", "type": "Combat"},
            {"level": 60, "name": "Deepmoss Spider Eggs", "description": "Collect Deepmoss Spider Eggs in Stonetalon Mountains.", "zone": "Stonetalon Mountains", "type": "Collecting Items"},
            {"level": 60, "name": "The Battle for Warsong Gulch!", "description": "Participate in the battle for Warsong Gulch in Ashenvale.", "zone": "Ashenvale", "type": "PvP"},
            {"level": 60, "name": "Blackrock Depths", "description": "Explore the depths of Blackrock Mountain in Searing Gorge.", "zone": "Searing Gorge", "type": "Dungeons"},
            {"level": 60, "name": "Araj's Scarab", "description": "Defeat Araj and collect his scarab in Western Plaguelands.", "zone": "Western Plaguelands", "type": "Combat"},
            {"level": 60, "name": "The Temple of Atal'Hakkar", "description": "Explore The Temple of Atal'Hakkar in Swamp of Sorrows.", "zone": "Swamp of Sorrows", "type": "Dungeons"},
            {"level": 60, "name": "The Molten Core", "description": "Raid the Molten Core in Blackrock Mountain.", "zone": "Blackrock Mountain", "type": "Raids"},
            {"level": 60, "name": "Onyxia's Lair", "description": "Raid Onyxia's Lair in Dustwallow Marsh.", "zone": "Dustwallow Marsh", "type": "Raids"},
            {"level": 60, "name": "Azuregos's Magical Ledger", "description": "Retrieve Azuregos's Magical Ledger in Azshara.", "zone": "Azshara", "type": "Collecting Items"},
            {"level": 60, "name": "The Battle of Alterac", "description": "Participate in the Battle of Alterac in Alterac Mountains.", "zone": "Alterac Mountains", "type": "PvP"},
            {"level": 60, "name": "The Battle for Alterac Valley", "description": "Participate in the Battle for Alterac Valley in Alterac Valley.", "zone": "Alterac Valley", "type": "PvP"},
            {"level": 60, "name": "Warsong Gulch Mark of Honor", "description": "Earn the Warsong Gulch Mark of Honor in Warsong Gulch.", "zone": "Warsong Gulch", "type": "PvP"},
            {"level": 60, "name": "Master Enchanter", "description": "Become a Master Enchanter in Stormwind City.", "zone": "Stormwind City", "type": "Professions (Enchanting)"},
            {"level": 60, "name": "Bijou's Reconnaissance Report", "description": "Retrieve Bijou's Reconnaissance Report in Feralas.", "zone": "Feralas", "type": "Collecting Items"},
            {"level": 60, "name": "Job Opening: Guard Captain of Revantusk Village", "description": "Hunt down the enemies threatening Revantusk Village in The Hinterlands.", "zone": "The Hinterlands", "type": "Combat"},
            {"level": 60, "name": "Nat Pagle, Angler Extreme", "description": "Complete Nat Pagle's fishing challenges in Dustwallow Marsh.", "zone": "Dustwallow Marsh", "type": "Professions (Fishing)"},
            {"level": 60, "name": "Ram Riding Harnesses", "description": "Collect Ram Riding Harnesses in Dun Morogh.", "zone": "Dun Morogh", "type": "Collecting Items"},
            {"level": 60, "name": "A Simple Request", "description": "Explore Stratholme dungeon in Stratholme.", "zone": "Stratholme", "type": "Dungeons"},
            {"level": 60, "name": "The Battle of Darrowshire", "description": "Participate in the Battle of Darrowshire in Eastern Plaguelands.", "zone": "Eastern Plaguelands", "type": "Raids"},
            {"level": 60, "name": "The Scarlet Apocalypse", "description": "Eliminate the Scarlet Crusade in Western Plaguelands.", "zone": "Western Plaguelands", "type": "Combat"},
            {"level": 60, "name": "Disharmony of Flame", "description": "Defeat the Elemental Firelords in Silithus.", "zone": "Silithus", "type": "Combat"},
            {"level": 60, "name": "The Heart of Hakkar", "description": "Raid The Temple of Atal'Hakkar and retrieve the Heart of Hakkar in The Temple of Atal'Hakkar.", "zone": "The Temple of Atal'Hakkar", "type": "Raids"},
            {"level": 60, "name": "In Dreams", "description": "Participate in the In Dreams event in Eastern Plaguelands.", "zone": "Eastern Plaguelands", "type": "Raids"},
            {"level": 60, "name": "The Fall of Ameth'Aran", "description": "Eliminate the corrupted forces in Ameth'Aran in Darkshore.", "zone": "Darkshore", "type": "Combat"}
        ], 
        'sortedBy': 'default'
    }


let playerOne = {
    'quests': [
        {"level": 5, "name": "Lost Tools", "description": "Help the blacksmith find his lost tools in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Collecting Items"},
            {"level": 6, "name": "Spider Infestation", "description": "Clear out the spider infestation in Northshire Abbey cellar.", "zone": "Elwynn Forest", "type": "Combat"},
            {"level": 7, "name": "Restoring the Light", "description": "Help the priest restore the Light to the Darkened Bank in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Recovering Artifacts"},
            {"level": 8, "name": "Wolves at the Gates", "description": "Protect the farmers from wolf attacks in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Defending NPCs"},
            {"level": 9, "name": "The Missing Mallet", "description": "Find the blacksmith's missing mallet in Loch Modan.", "zone": "Loch Modan", "type": "Collecting Items"},
            {"level": 10, "name": "Red Linen Goods", "description": "Collect red linen goods for the tailor in Stormwind City.", "zone": "Stormwind City", "type": "Collecting Items"},
            {"level": 10, "name": "The Defias Brotherhood", "description": "Defeat the Defias gang members.", "zone": "Westfall", "type": "Combat"},
            {"level": 11, "name": "Kobold Candles", "description": "Collect kobold candles for the alchemist in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Collecting Items"},
            {"level": 12, "name": "Wanted: Hogger", "description": "Eliminate the notorious bandit Hogger.", "zone": "Elwynn Forest", "type": "Combat"},
            {"level": 12, "name": "Protecting the Herd", "description": "Protect the kodo herd from predators in Northern Barrens.", "zone": "Northern Barrens", "type": "Defending NPCs"},
            {"level": 13, "name": "Cleaning Up the Coastline", "description": "Clean up the coastline from debris in Westfall.", "zone": "Westfall", "type": "Collecting Items"},
            {"level": 14, "name": "WANTED: Murlocs", "description": "Eliminate the murloc threat near the riverbank in Elwynn Forest.", "zone": "Elwynn Forest", "type": "Combat"}
    ], 
    'sortedBy': "default"
}


// --------------------------Data manipulation-----------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
function startUp(){
    // render ui
    // fetch current quest list
    retrieveQuestList(playerOne)
}

function retrieveQuestList(list){
    if(list.sortedBy == 'default'){
        list['quests'].forEach(quest => {
            //console.log(quest.name);
            }
        )
    } else {
        list['quests'].forEach(quest => {
            console.log(`${quest[list.sortedBy]}: ${quest.name}`)
            }
        )
    }
}

function showInProgressQuests(list){
    console.log('List of In Progress Quests:')
    list['quests'].forEach(quest => {
        if(quest.status == 'in progress'){
            console.log(quest.name)
        }
    });
}

function showCompletedQuests(list){
    console.log('List of Completed Quests:')
    list['quests'].forEach(quest => {
        if(quest.status == 'complete'){
            console.log(quest.name)
        }
    });
}

function addQuest(list, level, name, description, zone, type){
    //check to see if the quest is already in list
    let duplicate = false;
    list['quests'].forEach(quest => {
        if(quest.name == name){
            duplicate = true;
            return duplicate;
        }
    });
    if (duplicate == false){
        list['quests'].push(
            {
                "level": level,
                "name": name,
                "description": description,                
                "zone": zone,
                "type": type,
                "status": "in progress"
                }
        );
    } else {return}
}

function completeQuest(quest){
    quest.status = "Complete";
    console.log(quest.name + ' completed!');
}

function sortListBy(list, parameter){
    //console.log(list['quests'])
    list['quests'].sort(function(a, b){
        let x = a[parameter].toLowerCase();
        let y = b[parameter].toLowerCase();
        if(x < y) {return -1;}
        if(x > y) {return 1;}
        return 0;
        }
    );
    list.sortedBy = parameter;
}

function reverseSortListBy(list, parameter){
    //console.log(list['quests'])
    list['quests'].sort(function(a, b){
        let x = a[parameter].toLowerCase();
        let y = b[parameter].toLowerCase();
        if(x > y) {return -1;}
        if(x < y) {return 1;}
        return 0;
        }
    );
    list.sortedBy = `${parameter} reversed`;
}


function questFilter(list, word, parameter){
    //lets create a function that takes 2 arguments, the quest log, and a word
    //it'll return all of the quests that have that word in the zone
    if (!isNaN(word) && word !== ''){
        //console.log(word + ' is a number.')
        word = +word;
        const results = list.quests.filter((quest) => 
            quest[parameter] >= word - 3 && quest[parameter]<= word + 3);
    return results
    }
    if (word == ''){
        const results = list.quests;
        //console.log(word + " is an empty string.");
    return results
    }
    const results = list.quests.filter((quest) => 
        quest[parameter].toLowerCase().includes(word.toLowerCase()));
        //console.log(word + ' is a word.')
    return results
}

function getQuestParameter(list, parameter){
    //Gives all unique values of whatever parameter we set
    // aka zones, or types
    const uniqueResults = new Set();
    list['quests'].forEach(quest => {
        uniqueResults.add(quest[parameter]);
    });
    return Array.from(uniqueResults);

}



// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//




// ----------------------DOM Manipulation ---------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
let mainContainer = document.getElementById('mainContainer');
let questLogContainer = document.createElement('div');
questLogContainer.classList.add('container-fluid');
questLogContainer.id = 'questLogContainer';
mainContainer.appendChild(questLogContainer);

let addQuestBtn = document.getElementById('addBtn');

let questModalHead = document.getElementById('questModalHead');
let questModalBody = document.getElementById('questModalBody');

let levelSearchInput = document.getElementById('levelSearch');
let nameSearchInput = document.getElementById('nameSearch');
let descriptionSearchInput = document.getElementById('descriptionSearch');
let zoneSearchInput = document.getElementById('zoneSearch');
let typeSearchInput = document.getElementById('typeSearch');

addQuestBtn.addEventListener('click', function(){
    levelSearchInput.value = '';
    nameSearchInput.value = '';
    descriptionSearchInput.value = '';
    zoneSearchInput.value = '';
    typeSearchInput.value = '';  
    populateQuestTable(questBank.quests)  
})

levelSearchInput.addEventListener('input', function(e){
    let results = questFilter(questBank, e.target.value, 'level');
    nameSearchInput.value = '';
    descriptionSearchInput.value = '';
    zoneSearchInput.value = '';
    typeSearchInput.value = '';
    populateQuestTable(results);
    return results;
})

nameSearchInput.addEventListener('input', function(e){
    let results = questFilter(questBank, e.target.value, 'name');
    levelSearchInput.value = '';
    descriptionSearchInput.value = '';
    zoneSearchInput.value = '';
    typeSearchInput.value = '';
    populateQuestTable(results);
    return results;
})

descriptionSearchInput.addEventListener('input', function(e){
    let results = questFilter(questBank, e.target.value, 'description');
    levelSearchInput.value = '';
    nameSearchInput.value = '';
    zoneSearchInput.value = '';
    typeSearchInput.value = '';
    populateQuestTable(results);
    return results;
})

zoneSearchInput.addEventListener('input', function(e){
    let results = questFilter(questBank, e.target.value, 'zone');
    levelSearchInput.value = '';
    nameSearchInput.value = '';
    descriptionSearchInput.value = '';
    typeSearchInput.value = '';
    populateQuestTable(results);
    return results;
})

typeSearchInput.addEventListener('input', function(e){
    let results = questFilter(questBank, e.target.value, 'type');
    levelSearchInput.value = '';
    nameSearchInput.value = '';
    descriptionSearchInput.value = '';
    zoneSearchInput.value = '';
    populateQuestTable(results);
    console.log(results);
    return results;
})


// ---------- This writes out our quest list to the DOM ---------------- //
function renderQuestList(list, sort){
    //clear DOM elements
    questLogContainer.innerText = '';

    //get an array of all the zones/types/data we have quests in
    let sortByCategory = getQuestParameter(list, sort);
    let sortIndicator = document.getElementById('sortIndicator');
    sortIndicator.innerText = `Sorted by: ${sort}`;

    //create and append a container div, and a h2 element for each quest zone
    sortByCategory.forEach(questCategory => {
        let zoneIndex = sortByCategory.indexOf(questCategory);
        questLogContainer.classList.add('accordion') // ADDED THIS
        let zoneContainer = document.createElement('div');
        zoneContainer.classList.add('accordion-item');
        questLogContainer.appendChild(zoneContainer);

        let zoneHeader = document.createElement('h2');
        zoneHeader.classList.add('accordion-header') // ADDED THIS
        zoneContainer.appendChild(zoneHeader);

        let zoneButton = document.createElement('button');
        zoneButton.classList.add('accordion-button');
        zoneButton.classList.add('accordion-header-edits');
        zoneButton.setAttribute("type",'button'); // CHANGED THIS
        zoneButton.setAttribute("data-bs-toggle",'collapse'); // CHANGED THIS
        zoneButton.setAttribute("data-bs-target",`#collapse${zoneIndex}`); // CHANGED THIS
        zoneButton.innerText = questCategory;
        zoneHeader.appendChild(zoneButton);

        let zoneQuests = document.createElement('div');
        zoneQuests.id = `collapse${zoneIndex}`;
        zoneQuests.classList.add('accordion-collapse') 
        zoneQuests.classList.add('collapse');
        zoneQuests.classList.add('show');
        zoneQuests.setAttribute('data-bs-parent', 'questLogContainer');
        zoneContainer.appendChild(zoneQuests);

        let zoneQuestBody = document.createElement('div');
        zoneQuestBody.classList.add('accordion-body');
        let zoneQuestBodyRow = document.createElement('div');
        zoneQuestBodyRow.classList.add('row');
        zoneQuests.appendChild(zoneQuestBody);
        zoneQuestBody.appendChild(zoneQuestBodyRow);

        let questNamesContainerColumn = document.createElement('div');
        questNamesContainerColumn.classList.add('col-4');
        let questNamesContainer = document.createElement('div');
        questNamesContainerColumn.appendChild(questNamesContainer);
        questNamesContainer.classList.add('list-group');
        questNamesContainer.classList.add('questHeaderContainer');
        questNamesContainer.setAttribute('id', 'list-tab');
        questNamesContainer.setAttribute('role', 'tablist');
        zoneQuestBodyRow.appendChild(questNamesContainerColumn);

        let questDetailsContainer = document.createElement('div');
        questDetailsContainer.classList.add('col-8');
        questDetailsContainer.classList.add('tab-content');
        questDetailsContainer.setAttribute('id', 'nav-tabContent')
        zoneQuestBodyRow.appendChild(questDetailsContainer);
        


        
        // zoneHeader.setAttribute('href',`.zone${zoneIndex + 1}Quests`);
        // zoneHeader.setAttribute("role",'button');



        // check each zone, if any quests match it, create/append a p element
        list.quests.forEach(quest => {
            if(quest[sort] == questCategory){
                let questTitle = document.createElement('div');
                questTitle.classList.add('fw-bold');
                questTitle.classList.add('list-group-item');
                questTitle.classList.add('list-group-item-action');
                console.log(list.quests.indexOf(quest))
                questTitle.setAttribute('id', `questNumber${list.quests.indexOf(quest)}ID`);
                questTitle.setAttribute('type', 'button');
                questTitle.setAttribute('href', `#questNumber${list.quests.indexOf(quest)}`);
                questTitle.setAttribute('aria-controls', `questNumber${list.quests.indexOf(quest)}`);
                questTitle.setAttribute('data-bs-toggle', `list`);
                questTitle.setAttribute('role', `tab`);

                let questDetails = document.createElement('div');
                questDetails.classList.add('tab-pane');
                questDetails.classList.add('fade');
                questDetails.classList.add('border');
                questDetails.classList.add('border-white');
                questDetails.classList.add('rounded');
                questDetails.setAttribute('id', `questNumber${list.quests.indexOf(quest)}`);
                questDetails.setAttribute('role', 'tabpanel');
                questDetails.setAttribute('aria-labelledby', `questNumber${list.quests.indexOf(quest)}`);
                
                // questTitle.id = `zone${zoneIndex + 1}Quests`
                // questTitle.classList.add(`zone${zoneIndex + 1}Quests`);
                // questTitle.classList.add('collapse');
                questTitle.innerText = quest.name;
                questDetails.innerHTML = `
                <div class="card" style="width: 100%; margin: auto;">
                <div class="card-body" style="background-color: #111;">
                <h5 class="card-title" style="color: #33ff33;">${quest.name}</h5>
                <p class="card-text">
                <div class="textYellow">Level: ${quest.level}</div>
                <div class="textCommon">Description:
                ${quest.description}</div>
                <br>
                <br>
                <a href="#" class="btn wowButtons">Complete Quest</a>
                </div>
                </div>
                `;
                questNamesContainer.appendChild(questTitle);    
                questDetailsContainer.appendChild(questDetails);

            }
        })
    });
}

// ------ This is how the user swaps between 'zone' and 'type' sort ---- //
function toggleSort(){
    if(sortButton.innerText == 'Sorted by: type') {
        renderQuestList(playerOne, 'zone');
    } else {
        renderQuestList(playerOne, 'type');
    } 
}

// ------- This creates the questBank table in the "add" modal ----- //
function populateQuestTable(list){
    questModalBody.innerHTML = '';
    list.forEach(quest => {
        //console.log(quest);
        let match = false;
        playerOne.quests.forEach(p1Quest => {
            if(p1Quest.name == quest.name) {
                //console.log(`${quest.name} is a match.`);
                match = true;
                return;
            }
        })
        if(match == true) {
            return
        }

        let questRow = document.createElement('tr');
        questRow.classList.add('questRow');
        questModalBody.appendChild(questRow);

        let questLevel = document.createElement('td');
        questLevel.setAttribute('data-key', 'level')
        questLevel.innerText = quest.level;
        questRow.appendChild(questLevel);

        let questName = document.createElement('td');
        questName.setAttribute('data-key', 'name');
        questName.innerText = quest.name;
        questRow.appendChild(questName);

        let questDescription = document.createElement('td');
        questDescription.setAttribute('data-key', 'description');
        questDescription.innerText = quest.description;
        questRow.appendChild(questDescription);
        
        let questZone = document.createElement('td');
        questZone.setAttribute('data-key', 'zone');
        questZone.innerText = quest.zone;
        questRow.appendChild(questZone);

        let questType = document.createElement('td');
        questType.setAttribute('data-key', 'type');
        questType.innerText = quest.type;
        questRow.append(questType);

    });

}

// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //
// -------VVVVV RETIRED FUNCTION, DELETE IF NOTHING BREAKS VVVVV--------- //
// function populateFilteredQuestTable(list){
//     questModalBody.innerHTML = '';
//     list.forEach(quest => {
//         let questRow = document.createElement('tr');
//         questRow.classList.add('questRow');
//         questModalBody.appendChild(questRow);

//         let questLevel = document.createElement('td');
//         questLevel.setAttribute('data-key', 'level')
//         questLevel.innerText = quest.level;
//         questRow.appendChild(questLevel);

//         let questName = document.createElement('td');
//         questName.setAttribute('data-key', 'name');
//         questName.innerText = quest.name;
//         questRow.appendChild(questName);

//         let questDescription = document.createElement('td');
//         questDescription.setAttribute('data-key', 'description');
//         questDescription.innerText = quest.description;
//         questRow.appendChild(questDescription);
        
//         let questZone = document.createElement('td');
//         questZone.setAttribute('data-key', 'zone');
//         questZone.innerText = quest.zone;
//         questRow.appendChild(questZone);

//         let questType = document.createElement('td');
//         questType.setAttribute('data-key', 'type');
//         questType.innerText = quest.type;
//         questRow.append(questType);
//     });

//}
// -------^^^^^ RETIRED FUNCTION, DELETE IF NOTHING BREAKS ^^^^^--------- //
// ---------------------------------------------------------------------- //
// ---------------------------------------------------------------------- //

function filterQuests(list, parameter, value) {
    const results = list['quests'].filter(quest => 
        quest[parameter] === value);
        return results;
}


// ----- When the user clicks on a header, the table is sorted by that parameter ----- //
// questModalHead.addEventListener('click', function(e){
//     sortQuestTable(e.target.placeholder.toLowerCase());
//     populateQuestTable(questBank);
// })

// ----- sorts by parameter we've clicked on, or reverse sorts it if we're already sorted that way ----- //
function sortQuestTable(parameter){
    if (parameter == questBank.sortedBy){
        reverseSortListBy(questBank, parameter)
    } else {
        sortListBy(questBank, parameter);
    }
}

// ----- When a user clicks on a quest in the questBank table, this grabs ----- //
// ----- the selected quest and stores it in an object, so it can be used ----- //
// ----- in the "addQuest" function ----- //
let selectedQuest = {};
function getArgs(e){
    let parentElement = e.target.parentElement;
    let children = parentElement.children;
    let childrenArray = Array.from(children);
    let args = {};
    childrenArray.forEach(child => {
        let key = child.getAttribute('data-key');
        let value = child.innerText.trim();
        args[key] = value;
    });
    //console.log(args);
    selectedQuest = args;
    return selectedQuest;
}

// ----- Upon clicking on a quest in the questBank table, we grab the arguments, enable the----- //
// ----- "Confirm" button, remove highlights from quests on the table, and highlight the clicked ----- //
// ----- on quest. ----- //
questModalBody.addEventListener('click', function(e) {
    getArgs(e);
    confirmQuestBtn.disabled = false;
    removeHighlights();
    //e.target.parentElement.classList.add('table-selected');
    styleQuestRowTD(e.target.parentElement);
});

// ----- removes highlights from other quests ----- //
function removeHighlights(){
    let questChildren = Array.from(questModalBody.children);    
    questChildren.forEach(questRow => {
        let questRowChildren = Array.from(questRow.children);
        questRowChildren.forEach(child => {
            child.classList.remove('table-selected');
        }
        )
    }
    )
};

function styleQuestRowTD(questRow) {
    let questRowChildren = Array.from(questRow.children);
    questRowChildren.forEach(child => {
        child.classList.add('table-selected');        
    });
}

// ---- Upon clicking on the "Confirm" button, we add the selected quest to the active -----//
// ---- player's quest log, re-disable the "Confirm" button, re-render the quest list to the DOM -----//
// ---- and remove the highlights for the selected quest. ---- //
let confirmQuestBtn = document.getElementById('confirmQuestBtn');
confirmQuestBtn.addEventListener('click', function(){
    addQuest(playerOne, selectedQuest.level, selectedQuest.name, selectedQuest.description, selectedQuest.zone, selectedQuest.type);
    confirmQuestBtn.disabled = true;
    renderQuestList(playerOne, 'zone');
    removeHighlights();

});


let sortButton = document.getElementById('sortIndicator');
sortButton.addEventListener('click', toggleSort);

function mobileTuck(){
    if (window.innerWidth < 768) {
        mainContainer.classList.add('g-0');
        let navContainer = document.getElementById('navContainer');
        navContainer.classList.add('g-0');
        let splashContainer = document.getElementById('splashContainer');
        splashContainer.classList.add('g-0');
        splashContainer.style.marginBottom = '0px';        
        let splashChildren = [...splashContainer.children];
        splashChildren.forEach(child => {
            child.classList.add('rounded-0');
        });
        questLogContainer.classList.add('g-0');
        let questList = [...questLogContainer.children];
        questList.forEach(quest => {
            quest.classList.add('rounded-0');
            
        });
    } else {
        mainContainer.classList.remove('g-0');
        let navContainer = document.getElementById('navContainer');
        navContainer.classList.remove('g-0');
        let splashContainer = document.getElementById('splashContainer');
        splashContainer.classList.remove('g-0');
        splashContainer.style.marginBottom = '15px';
        let splashChildren = [...splashContainer.children];
        splashChildren.forEach(child => {
            child.classList.remove('rounded-0');
        });
        questLogContainer.classList.remove('g-0');
        let questList = [...questLogContainer.children];
        questList.forEach(quest => {
            quest.classList.remove('rounded-0');
        });
    }
}
window.addEventListener('resize', mobileTuck);


// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//
// ------------------------------------------------------------------//

startUp();
renderQuestList(playerOne, 'zone');