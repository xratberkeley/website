import * as React from "react"
import { Link } from "gatsby";
import { CopyToClipboard } from "react-copy-to-clipboard";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import img1 from '../../../images/decal/HW2-0.png';
import img2 from '../../../images/decal/HW2-1.png';
import img3 from '../../../images/decal/HW2-2.png';
import img4 from '../../../images/decal/HW2-3.png';
import img5 from '../../../images/decal/HW2-4.png';
import img6 from '../../../images/decal/HW2-5.png';
import img7 from '../../../images/decal/HW2-6.png';
import img8 from '../../../images/decal/HW2-7.png';
import img9 from '../../../images/decal/HW2-8.png';

const hw2 = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="homework" open="homework"/>
            <div className={decalStyles.textWrapper}>
                <h1>Homework 2: Music Visualizer</h1>   

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Introducing Spectrum Theory"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#introducing-spectrum-theory"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Extracting Spectrum Data"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#extracting-spectrum-data"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Visualizing Spectrum Data"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#visualizing-spectrum-data"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Introducing Frequency Bands"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#introducing-frequency-bands"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="8 Bin Separation"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#8-bin-separation"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Visualizing 8 Bins"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#visualizing-8-bins"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Add Your Own Flair"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#add-your-own-flair"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Submission and Grading"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="submission-and-grading"
                            alt=""
                    /></span></p>
                </div>

                <p>
                Your second assignment is to create your very own music visualizer! It will look something like this:
                <br/><br/>
                <img src={img1}/>
                <br/><br/>
                This assignment will be a review of some of the Unity editor tools you have practiced in HW1, but more importantly, an introduction on using C# scripts to manipulate gameobjects.
                <br/><br/>
                First off, download the skeleton asset package <a href="https://drive.google.com/file/d/1qcFEAebMHNdoy75RfwDyPCGzI1t7l23H/view?usp=sharing" target="_blank" className={decalStyles.yellowUnderline}>here</a> and import it into a new project. Create a new scene called HW2 to work in.
                <br/><br/>
                In the meantime, take a look at these amazing music visualizer examples created with Unity by other people. This homework only goes over the basics, but you could take it to another level by adding your own flair. 
                Links: <a href="https://www.youtube.com/watch?v=tMzmHWekLaY" target="_blank" className={decalStyles.yellowUnderline}>1</a>
                , <a href="https://www.youtube.com/watch?v=cBYx8Dm81tc" target="_blank" className={decalStyles.yellowUnderline}>2</a>
                , <a href="https://www.youtube.com/watch?v=80tu2ZLKD-o" target="_blank" className={decalStyles.yellowUnderline}>3</a>
                , <a href="https://www.youtube.com/watch?v=XbNhv2ylzKw" target="_blank" className={decalStyles.yellowUnderline}>4</a>
                , <a href="https://www.youtube.com/watch?v=swb-8Azjz9Q" target="_blank" className={decalStyles.yellowUnderline}>5</a>.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="introducing-spectrum-theory">Introducing Spectrum Theory</h2>
                <p>
                Every sound that enters your ear is actually a sum of different frequencies. Pure waveforms from various sources combine together into a single complex waveform. This complex waveform is then processed by your brain to create music, conversation, and everything else you hear.
                <br/><br/>
                The <a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform" target="_blank" className={decalStyles.yellowUnderline}>Fast Fourier Transform</a> algorithm is the exact reverse - it takes a complex waveform and decomposes it into its base frequencies. Take the picture below as an example, which looks at a simple song from various perspectives.
                <br/><br/>
                <img src={img2}/>
                <br/><br/>
                What you physically hear is the result, which is the sum of the pure bass, kick, synth, and harmonics waveforms.
                <br/><br/>
                Performing FFT on the result returns an array of weights, which represent how much of each base frequency is being used in the result. You’ll notice there are 4 peaks, one for each of the pure waveforms. The leftmost peak represents the lowest frequency (the bass), and is the tallest because the bass has the greatest amplitude out of the four waveforms.
                <br/><br/>
                You might have noticed the FFT graph looks a little bit like a music visualization - and in fact it is. Music visualizations are nothing more than visual representations of the FFT for a song and how it changes over time. In our case, we will be representing the values of the FFT with the heights of various cubes.
                <br/><br/>
                <i>If you’d like to learn more, EE16A covers this subject in much more detail.</i>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="extracting-spectrum-data">Extracting Spectrum Data</h2>
                <p>
                Let’s start off the homework by creating a script that allows you to extract spectrum data from any audio source.
                <br/><br/>
                We will start by creating an empty gameobject named “SpectrumAnalyzer” and a C# script named “SpectrumAnalyzer”. Add both an Audio Source and the script to the gameobject. Then open the script in the text editor of your choice, which will likely be Visual Studio or Monodevelop.
                <br/><br/>
                As a side tangent, you may change your script editor by going to <i>Edit > Preferences > External Tools</i>.
                <br/><br/>
                <img src={img3}/>
                <br/><br/>
                Start off by adding two variables to the script, above the Start() function.
                <br/><br/>
                <div className={decalStyles.code}>
                    AudioSource audioSource;
                    <br/>
                    public static float[] samples = new float[512];
                    <CopyToClipboard
                        text="AudioSource audioSource;
                        public static float[] samples = new float[512];">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                As you remember from roll-a-ball, the Start() function is called once, when the script is enabled. This makes it a good place to instantiate and/or initialize variables. We’ll initialize our audio source component here. Additionally, stub in a new function called GetSpectrumAudioSource().
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void Start () {`}
                    <br/>
                    &nbsp;&nbsp;{`audioSource = GetComponent<AudioSource>();`}
                    <br/>
                    {`}`}
                    <br/><br/>
                    {`void GetSpectrumAudioSource() {`}
                    <br/><br/>
                    {`}`}
                    <CopyToClipboard
                        text="void Start () {
                            audioSource = GetComponent<AudioSource>();
                        }
                        
                        void GetSpectrumAudioSource() {
                        
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                We’ll use this function to analyze the spectrum data from audioSource and save it in variable samples every frame. Fortunately, Unity has a built in function that does this for us, <a href="https://docs.unity3d.com/ScriptReference/AudioSource.GetSpectrumData.html" target="_blank" className={decalStyles.yellowUnderline}>GetSpectrumData</a>. We’ll use channel 0 since we’re only playing one thing at a time, and use Blackman for our spectrum analysis window due to its overall robust behaviour.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void GetSpectrumAudioSource() {`}
                    <br/>
                    &nbsp;&nbsp;{`audioSource.GetSpectrumData(samples, 0, FFTWindow.Blackman);`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void GetSpectrumAudioSource() {
                            audioSource.GetSpectrumData(samples, 0, FFTWindow.Blackman);
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Since we’ll want to update our spectrum samples every frame, put GetSpectrumAudioSource() in the Update function.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void Update () {`}
                    <br/>
                    &nbsp;&nbsp;{`GetSpectrumAudioSource();`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void Update () {
                            GetSpectrumAudioSource();
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Save your work and switch back to Unity. Select your SpectrumAnalyzer gameobject and set the AudioClip to whichever audio file you want to visualize. We have provided a sample audiofile in the Audio folder, in case you don’t have any. Here are some links to music if you’d like to download 
                some: <a href="https://www.bensound.com/" target="_blank" className={decalStyles.yellowUnderline}>1</a>
                , <a href="http://www.purple-planet.com/" target="_blank" className={decalStyles.yellowUnderline}>2</a>
                , <a href="http://freemusicarchive.org/" target="_blank" className={decalStyles.yellowUnderline}>3</a>
                , <a href="https://soundcloud.com/royalty-free-audio-loops" target="_blank" className={decalStyles.yellowUnderline}>4</a>.
                <br/><br/>
                <img src={img4}/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="visualizing-spectrum-data">Visualizing Spectrum Data</h2>
                <p>
                Next, we’re going to visualize each of the 512 spectrum samples using cubes.
                <br/><br/>
                In <i>Assets > Scripts</i>, find and open the script “Instantiate512cubes”. This script starts off by spawning 512 cubes in a circle such that they all face the center. It then takes the sample data every frame and represents it using the heights of the cubes. The effect will be something like this:
                <br/><br/>
                <img src={img5}/>
                <br/><br/>
                There are two sections of this script for you to complete on your own. Read the comments for more details on what each section does and hints on how to do it.
                <br/><br/>
                When you’re done, save your work and switch back to Unity. Create a gameobject called “InstantiateCubes” and attach the script to this object. You’ll notice the Cube Prefab isn’t assigned - you can find a prefab for it in <i>Assets > Prefabs</i>.
                <br/><br/>
                Press play! You’ll notice that the camera location isn’t great. Change the position and rotation so that the camera is showing the scene correctly. Remember that while you can edit anything while the game is playing by switching back to the scene view, none of it will save once the game stops playing.
                <br/><br/>
                To work around this, move your camera to where you want it, then click the gear icon in the transform component’s top right to copy component. Then stop play mode (which will move your camera back), click the gear, and paste the component values you just copied.
                <br/><br/>
                Congrats! You now have a working music visualizer.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="introducing-frequency-bands">Introducing Frequency Bands</h2>
                <p>
                After testing out your visualizer, you might have noticed that most of the movement happens in the first couple cubes (the lower frequencies) while most of the other cubes (higher frequencies) barely move.
                <br/><br/>
                The reason for this is that the lower frequency sounds are much closer together, while the higher frequencies are much more spread out. This means all the low frequencies get shoved into a couple of cubes, while the high frequencies are spread out across a whole bunch of them.
                <br/><br/>
                We’re now going to fix this issue by collating the 512 samples into just 8 bins, which will represent different frequency bands. Audio specialists have grouped the range of human detectable frequencies into 7 broad regions. They are as follows:
                <ul>
                    <li>Sub Bass: 20 - 60 Hz</li>
                    <li>Bass: 60 - 250 Hz</li>
                    <li>Low Midrange: 250 - 500 Hz</li>
                    <li>Midrange: 500 - 2k Hz</li>
                    <li>Upper Midrange: 2k - 4k Hz</li>
                    <li>Presence: 4k - 6k Hz</li>
                    <li>Brilliance: 6k- 20k Hz</li>
                </ul>
                <img src={img6}/>
                <br/><br/>
                Notice how the regions roughly increase in size as they increase in frequency. Inspired by this, we’ll create 8 bins where higher frequency bins absorb more samples. We have a total range of 20k - 20 = 19980 Hz to cover, and with 512 samples each sample covers 19980 / 512 = 39 Hz. We’ll define the bins as follows:
                <br/><br/>
                <img src={img7}/>
                <br/><br/>
                <i>*We stick the two last samples into the final bin, hence why it’s 258 and not 256.</i>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="8-bin-separation">8 Bin Separation</h2>
                <p>
                Switch to editing SpectrumAnalyzer. Add a variable for array freqBand, which will contain the collated sample data bins. Also add a function called MakeFrequencyBands(). As filling out this function is rather tedious, we’ve done it for you.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public static float[] freqBand = new float[8];`}
                    <br/>
                    {`void MakeFrequencyBands() {`}
                    &nbsp;&nbsp;{`int count = 0;`}
                    <br/><br/>
                    &nbsp;&nbsp;{`// Iterate through the 8 bins.`}
                    <br/>
                    &nbsp;&nbsp;{`float average = 0;`}
                    <br/>
                    &nbsp;&nbsp;{`int sampleCount = (int)Mathf.Pow (2, i + 1);`}
                    <br/><br/>
                    &nbsp;&nbsp;{`// Adding the remaining two samples into the last bin.`}
                    <br/>
                    &nbsp;&nbsp;{`if (i == 7) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`sampleCount += 2;`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/><br/>
                    &nbsp;&nbsp;{`// Go through the number of samples for each bin, add the data to the average`}
                    <br/>
                    &nbsp;&nbsp;{`for (int j = 0; j < sampleCount; j++) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`average += samples [count];`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`count++;`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/><br/>
                    &nbsp;&nbsp;{`// Divide to create the average, and scale it appropriately.`}
                    <br/>
                    &nbsp;&nbsp;{`average /= count;`}
                    <br/>
                    &nbsp;&nbsp;{`freqBand[i] = (i+1) * 100 * average;`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    {`}`}
                    <CopyToClipboard
                        text="public static float[] freqBand = new float[8];

                        void MakeFrequencyBands() {
                            int count = 0;
                            
                            // Iterate through the 8 bins.
                            for (int i = 0; i < 8; i++)  {
                                float average = 0;
                                int sampleCount = (int)Mathf.Pow (2, i + 1);
                        
                                // Adding the remaining two samples into the last bin.
                                if (i == 7) {
                                    sampleCount += 2;
                                }
                        
                                // Go through the number of samples for each bin, add the data to the average
                                for (int j = 0; j < sampleCount; j++) {
                                    average += samples [count];
                                    count++;
                                }
                        
                                // Divide to create the average, and scale it appropriately.
                                average /= count;
                                freqBand[i] = (i+1) * 100 * average;
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Add a call to MakeFrequencyBands() to Update() so it gets called every frame.
                <br/><br/>
                If you ran and debugged this updated script now, you’d find that the value range for each bin vary greatly. To make it easier to work with the values, we’ll scale each bin’s value into a number between 0 and 1.
                <br/><br/>
                Add the following variables and function to SpectrumAnalyzer:
                <br/><br/>
                <div className={decalStyles.code}>
                    {`float[] freqBandHighest = new float[8];`}
                    <br/>
                    {`public static float[] audioBands = new float[8];`}
                    <br/><br/>
                    {`void CreateAudioBands() {`}
                    <br/><br/>
                    {`}`}
                    <CopyToClipboard
                        text="float[] freqBandHighest = new float[8];
                        public static float[] audioBands = new float[8];
                        
                        void CreateAudioBands() {
                        
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Fill out CreateAudioBands() on your own. This function should first update freqBandHighest, which contains the highest-yet-seen values for each bin. Then it divides each current band value by the highest-yet-seen to get us a number between 0 and 1. This result is saved to array audioBands.
                <br/><br/>
                Once you’ve completed CreateAudioBands(), add it to the end of Update() so it gets called each frame.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="visualizing-8-bins">Visualizing 8 Bins</h2>
                <p>
                Finally, let’s create cubes to visualize the calculated values for each bin.
                <br/><br/>
                Let’s use the cube prefab again, and place eight of them in the middle of the scene. You can simply drag the prefab into the Hierarchy or the scene view. Scale them so they’re visible in the game view.
                <br/><br/>
                <img src={img8}/>
                <br/><br/>
                We’ll need a script to read the values from audioBands in SpectrumAnalyzer and represent them as heights for each cube. Create a C# script named “Cube”, and add the following variables to it:
                <br/><br/>
                <div className={decalStyles.code}>
                    public int band;
                    <br/>
                    public float startScale;
                    <br/>
                    public float scaleMultiplier;
                    <br/>
                    <CopyToClipboard
                        text="public int band;
                        public float startScale;
                        public float scaleMultiplier;">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                The variable band represents which bin this cube represents. startScale represents the height of the cube when its audioBand value is 0, and scaleMultiplier is how much to multiply the audioBand value by.
                <br/><br/>
                Fill out the needed functionality on your own. You can refer to Instantiate512cube for help, since the functionality is similar. When you’re done, attach the script to each of the cubes and set the editor values appropriately (remember, you can modify multiple objects at once via shift/ctrl select). You do not have to use the values shown below.
                <br/><br/>
                <img src={img9}/>
                <br/><br/>
                Now try out your music visualizer!
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="add-your-own-flair">Add Your Own Flair</h2>
                <p>
                Your final task is to add your own feature to the music visualizer. This is completely open-ended - you may go as crazy as you’d like. We only request that you do not remove the functionality you’ve implemented thus far.
                <br/><br/>
                Here are some suggestions on what you could add:
                <ul>
                    <li><a href="https://docs.unity3d.com/ScriptReference/Light.html" target="_blank" className={decalStyles.yellowUnderline}>Lights</a></li>
                    <li><a href="https://docs.unity3d.com/ScriptReference/Material.html" target="_blank" className={decalStyles.yellowUnderline}>Colors</a></li>
                    <li>Different Kinds of Visualization (spheres, rotation, etc.)</li>
                    <li>Band Buffering (removing the choppy movement of the bands)</li>
                </ul>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="submission-and-grading">Submission and Grading</h2>
                <p>
                Upload the project via Google Drive and submit the link to bCourses. (Instructions on Ed.) Completion of the functionality described in this homework will get you 4 points (out of 5), and adding your own improvements will get you the last point. There will be extra credit given to those whom we deemed went above and beyond with their improvements.
                <br/><br/><br/>
                <b>CREDITS</b>
                <br/><br/>
                This assignment was taken and adapted from Peter Olthof’s brilliant music visualizer tutorial on Youtube. You can find it on his channel, <a href="https://www.youtube.com/channel/UCBkub2TsbCFIfdhuxRr2Lrw" target="_blank" className={decalStyles.yellowUnderline}>Peer Play</a>.
                </p>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default hw2

export const Head = () => <title>Extended Reality @ Berkeley</title>
