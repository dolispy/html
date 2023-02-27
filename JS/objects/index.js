// Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.

function instagramPost (authorHandle, content, imageLink, noOfViews, noOfLikes){
    this.authorHandle = authorHandle,
    this.content = content,
    this.imageLink = imageLink,
    this.noOfViews = noOfViews,
    this.noOfLikes = noOfLikes
    }
    
    
// Question 2: Create 2 Instagram post objects from the constructor function you created above
    
    const dolispy_instagramAccount = new instagramPost('dolispy', 'Arsenal Squad', 'https://www.arsenal.com/sites/default/files/styles/medium/public/images/squad-photo-2022-23.png?itok=GB02BHGs', '1,000,503 views', '5,635,879 likes');
    
    const ben_instagramAccount = new instagramPost('ben', 'Learn Web Development', 'https://www.stutern.com/images/opengraph.jpg', '800,321 views', '12,500 likes' );
    
    
//Question 3a: Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
    function createPerson(name, age, location){
        return{
            name, 
            age, 
            location
        }
    }
    
    let musa_Log = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State')
    
// Question 3b: Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Musa’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
    function jambScores(ENG, MATH, LIT, CRK){
        return{
            ENG,
            MATH,
            LIT,
            CRK
        }
    }
    // Musa's jamb scores
    musa_Log.jambScores = jambScores(56, 80, 49, 90)
    
    
    
    
// Question 4: What are the different ways you can clone an object? Give examples for each of them.
    /*
    Object.assign() `
    The spread operator
    JSON.parse(JSON.stringify())
    etc*/
    
    const basketball = {
        team: 'Los Angeles Lakers',
        yearFounded: '1947',
        starPlayer: 'Lebron James',
        noOfTrophies: 17
    }
    
//Object.assign
    const goldenStateWarriors = Object.assign({}, basketball);
    
//Spread Operator
    const bostonCeltics = {...basketball};
    
// JSON.parse(JSON.stringify())
    const miamiHeat = JSON.parse(JSON.stringify(basketball));
    
    
    
    
// Question 5: Enumeration Methods for Presidential Candidates
    const presidentialCandidates = {
        AAC : 'Omoleye Sowore',
        ACCORD: 'Christopher Imumolen',
        APC: 'Bola Ahmed Tinubu',
        LP: 'Peter Obi',
        NNPP: 'Rabiu Kwankwaso',
        PDP: 'Atiku Abubakar'
    }
    
    for(let party in presidentialCandidates){
        console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`)
    }