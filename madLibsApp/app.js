"use strict";

window.onload = () => {
    // Total questions
    let questionTotal = 16;

    // Question Counter (which question are we on)
    let questionCounter = 0;

    // Test logic:
    let solicitation = `Please enter a`;
    let questionArray = [
        `${solicitation} city`,
        `${solicitation} name`,
        `${solicitation} object`,
        `${solicitation} animal`,
        `${solicitation} color`,
        `${solicitation} car model`,
        `${solicitation} famous person name`,
        `${solicitation} software name`,
        `${solicitation} musical instrument`,
        `${solicitation} flower`,
        `${solicitation} river`,
        `${solicitation} county`,
        `${solicitation} song`,
        `${solicitation} ocean`,
        `${solicitation} food`,
        `${solicitation} drink`,
        `${solicitation} planet`,
    ];

    let userInputs = [];
    for (let i = questionTotal; i >= 0; i--) {
        // console.log(`The "i" of our "for" loop `);
        // console.log(i);
        // console.log("What question (of questionArray) is accessed (using questionCounter):");
        console.log(
            questionArray[questionCounter] + `... (${questionTotal} questions left)`
        );
        userInputs.push(
            prompt(
                questionArray[questionCounter] + `... (${questionTotal} questions left)`
            )
        );
        console.log(userInputs);
        questionCounter++;
        questionTotal--;
    }
    //original story:

    let originalStory = `<br><br><p style="color:whitesmoke;font-size:15pt;background-color:black;"> One ${userInputs[0]} night, soon after they had settled in, a wolf came out looking for ${userInputs[1]}. By the light of the moon he espied the first little pig’s house of straw and he sidled up to the door and called:

'Little pig, little pig, let me come in.'

'No, no, by the hair of my chinny chin chin!' replied the little pig.

'Then I’ll huff and I’ll puff and I’ll blow your house in!' said the wolf who was a very big, bad, and a greedy sort of ${userInputs[2]}.



And he huffed, and he puffed and blew the ${userInputs[3]} in. But the little pig ran away as fast as his trotters could carry him and went to the second little ${userInputs[4]} house to hide.

The next night the wolf was even ${userInputs[5]} and he saw the house of sticks. He crept up to the door and called:

'Little pig, little pig, let me come in.'

'Oh no, not by the hair on my chinny chin chin!' said the second little pig, as the first little pig hid trembling under the ${userInputs[6]}.

'Then I’ll huff and I’ll puff and I’ll blow your house in!' said the wolf.


 
And he huffed, and he puffed and he blew the ${userInputs[7]} in. But the little ${userInputs[8]} ran away as fast as their ${userInputs[9]} could carry them and went to the third little pig’s house to hide.

'What did I tell you?' said the third little pig. 'It’s important to build ${userInputs[10]} properly.' But he ${userInputs[11]} them in and they all ${userInputs[12]} down for the rest of the night.

The following ${userInputs[13]} the wolf was even ${userInputs[14]} and feeling bigger and badder than ${userInputs[15]}.

Prowling around, he came to the third little pig’s house. He crept up to the door and called:

'Little pig, ${userInputs[16]} pig, let me come in.'

'Oh no, not by the hair on my ${userInputs[17]} chin chin!' said the third little pig, while the first and the second little pigs hid trembling under the stairs.

'Then I’ll huff and I’ll puff and I’ll blow your house in!' said the wolf. </p><br><br>`
    console.log(originalStory);

    // End of User Inputs
    alert(
        "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
    );

    // Output
    console.log(originalStory);
    document.write(originalStory);
};