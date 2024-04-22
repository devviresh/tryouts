const textarea = document.getElementById("text");
let voicelist = document.getElementById("voice");
let speechbtn = document.querySelector(".submit");

let synth = speechSynthesis;
let isSpeaking = true;

function voiceSpeech(){
    for(let voice of synth.getVoices()){
        let option = document.createElement('option');
        option.text = voice.name;
        voicelist.add(option);
        console.log(option);
    }
}

synth.addEventListener('voiceschanged', voiceSpeech);

function textToSpeech(text){
    let utter = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()){
        if (voice.name ===voicelist.value){
            utter.voice = voice;
        }
    }
    speechSynthesis.speak(utter);
}

speechbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (textarea != ""){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if (textarea.value.length > 80){
            if(isSpeaking){
                synth.resume()
                isSpeaking=false;
                speechbtn.textContent = "Pause Speech";
            } else {
                synth.pause()
                isSpeaking=true;
                speechbtn.textContent = "Resume Speech";
            }
            setInterval(() => {
                if(!synth.speaking && !isSpeaking){
                    isSpeaking=true;
                    speechbtn.textContent = "Convert to Speech";
                }
            });
        } else {
            speechbtn.textContent = "Convert to Speech";
        }
    }
})
