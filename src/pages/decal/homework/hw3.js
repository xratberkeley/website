import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';

import img1 from '../../../images/decal/HW3-0.png';
import img2 from '../../../images/decal/HW3-1.png';
import img3 from '../../../images/decal/HW3-2.png';
import img4 from '../../../images/decal/HW3-3.png';
import img5 from '../../../images/decal/HW3-4.png';
import img6 from '../../../images/decal/HW3-5.png';
import img7 from '../../../images/decal/HW3-6.png';

const hw3 = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="homework" open="homework"/>
            <div className={decalStyles.textWrapper}>
                <h1>Homework 3: Fractal Generation</h1>   

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Getting Started"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#getting-started"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Creating the Children"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#creating-the-children"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Setting Children Transforms"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#setting-children-transforms"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Recursive Attributes"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#recursive-attributes"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Further Exploration"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#further-exploration"
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
                This homework assignment is to create your own fractal generator. It will look something like this:
                <br/><br/>
                <img src={img1}/>
                <br/><br/>
                In this assignment, we will explore recursion within Unity by writing scripts that’ll build fractals for us! Fractals pair great with recursion because recursion can exploit and represent its hierarchical and repetitive characteristic very naturally.
                <br/><br/>
                The fractal we want to construct for this assignment is fairly simple. Consider a single cube as the starting point. Our fractal will spawn new cubes half its size on five of its faces. Each of those cubes will then do the same thing, and so on until we reach the maximum recursion depth. Finally, every cube will slowly rotate on its y-axis, and thus children need to be oriented such that they do not clip significantly into their parent.
                <br/><br/>
                Consider a top down view of a parent and its direct children:
                <br/><br/>
                <img src={img2}/>
                <br/><br/>
                As you can see, the light grey children are half the size as the dark grey parent. Note that each child is right next to the parent - its face touches the parent’s face, but the two don’t overlap. The child in the center is no exception; it sits on top of the parent.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="getting-started">Getting Started</h2>
                <p>
                First off, download the skeleton asset package <a href="https://drive.google.com/file/d/1XDZzyjZIlU7TJ6J9rWNkQZCH-DNdbPeh/view?usp=sharing" target="_blank" className={decalStyles.yellowUnderline}>here</a> and import it into a new project. Create a new scene called HW3 to work in.
                <br/><br/>
                For testing purposes, we’ve provided you with a script to let you to zoom/pan your camera via mouse while in Game Mode. Attach the CameraController script to your Main Camera to do so.
                <br/><br/>
                Within the Main Camera’s inspector, we would also recommend that you change the Clear Flags option from “Skybox” to “Solid Color”. This will make your fractal easier to see.
                <br/><br/>
                <img src={img3}/>
                <br/><br/>
                You’ll also want to enable automatic lighting so your scene gets proper lighting. Do so through Windows > Lighting > Settings > Auto Generate.
                <br/><br/>
                Next, create an empty gameobject called “Fractal”, center it at the origin, and attach the Fractal script to it. You’ll notice there are some unpopulated fields in the Fractal component. Populate the fields with the following:
                <ul>
                    <li><b>Mesh: </b>Cube (standard Unity asset, click the circle next to the field to select it)</li>
                    <li><b>Material: </b>Fractal (included in the package)</li>
                    <li><b>MaxDepth: </b>1</li>
                    <li><b>Child Scale: </b>0.5</li>
                    <li><b>Max Rotation Speed: </b>15</li>
                </ul>
                Before jumping into the code writing parts of the homework, we recommend reading through Fractal.cs and understanding what the script is trying to do.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="creating-the-children">Creating the Children</h2>
                <p>
                In the first section, we’ll be filling in the CreateChildren() function of Fractal.cs.
                <br/><br/>
                The CreateChildren() function currently runs a for-loop through the length of the childDirections array, which contain all the directions in which the children of this fractal will be growing. We’ll use this for-loop to spawn our children.
                <br/><br/>
                In your code, you’ll want to do the following:
                <ol>
                    <li>Create a new gameobject.</li>
                    <li>Add a Fractal instance to the new gameobject.</li>
                    <li>Call the Initialize() function on the new Fractal.</li>
                </ol>
                Once you’ve successfully done this, press play and look at your hierarchy - you should see five additional gameobjects with Fractal components attached. 
                You’ll want to look into <a href="https://docs.unity3d.com/ScriptReference/GameObject-ctor.html" target="_blank" className={decalStyles.yellowUnderline}>creating new gameobjects</a> and 
                the <a href="https://docs.unity3d.com/ScriptReference/GameObject.AddComponent.html" target="_blank" className={decalStyles.yellowUnderline}>AddComponent()</a> function.
                <br/><br/>
                Additional hints:
                <ul>
                    <li>You’d want to use the generic version of the AddComponent function.</li>
                    <li>Pay careful attention to what’s being passed into Initialize().</li>
                    <li>It’s possible to do all this in one line!</li>
                </ul>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="setting-children-transforms">Setting Children Transforms</h2>
                <p>
                In this section, we’ll be working on modifying the transforms of our fractal children within the Initialize() function of Fractal.cs.
                <br/><br/>
                In particular, you’ll have to modify the gameobject’s transform such that it matches the requirements described at the beginning of the homework. Specifically, there are three attributes you’ll want to change:
                <ul>
                    <li><b>transform.localScale: </b>Use the childScale variable.</li>
                    <li><b>transform.localPosition: </b>Use the childDirections array and childIndex variable.</li>
                    <li><b>transform.localRotation: </b>Use the childOrientations array and childIndex variable. You will not be able to tell whether your rotation is correct until the next section.</li>
                </ul>
                Once you’ve successfully completed this section, you’ll see something very similar to the image below. Notice how there’s no visible gaps between the children and parent.
                <br/><br/>
                <img src={img4}/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="recursive-attributes">Recursive Attributes</h2>
                <p>
                In the first section, you wrote the recursive call. You might not have realized it back then, but you did! Now, we will complete the recursive structure. Since we’re building fractals, the children will need to inherit attributes from their parents to enforce the recursive, repetitive nature of fractals.
                <br/><br/>
                We’ve already completed three of the attributes for you: the mesh, materials, and childScale. You must figure out the values for:
                <ul>
                    <li><b>maxDepth: </b>This should be the same as its parent.</li>
                    <li><b>maxRotationSpeed: </b>This should be the same as its parent.</li>
                    <li><b>depth: </b>This should be one higher than its parent.</li>
                    <li><b>transform.parent: </b>This should be the transform associated with the Fractal parent.</li>
                </ul>
                Once you’ve done so, start by verifying that your implementation for transform.parent is correct. If you’ve implemented it correctly, your children will correctly “nest” within your parent in the hierarchy. Your hierarchy should look something like the one below!
                <br/><br/>
                <img src={img5}/>
                <br/><br/>
                Now, we can test everything else. Change the maxDepth in scene’s Fractal gameobject from 1 to 5. Assuming everything was implemented correctly, you should see something very similar to the image below.
                <br/><br/>
                <img src={img6}/>
                <br/><br/>
                Notice the beautiful nesting structure that we’ve created!
                <br/><br/>
                Finally, verify that your implementation for localRotation is correct. As you can observe from the image above, the children are rotating along the face of the parent. Make sure your children are doing so as well, and not rotating “into” the parent. To make it more clear, here is an example where the localRotation was set <b>incorrectly</b>:
                <br/><br/>
                <img src={img7}/>
                Congratulations! You now have a fully operating fractal!
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="further-exploration">Further Exploration</h2>
                <p>
                Now that you’ve completed the assignment, there’s lots of cool things that you can add to it. I’ve provided a few suggestions below!
                <ul>
                    <li>Adding support for spawning different sorts of meshes.</li>
                    <li>Irregular spawning of meshes? (i.e. only spawns if it’s greater than a certain number?)</li>
                    <li>Right now, our fractal has an upwards growing pattern. We can add support for it to grow towards the bottom as well.</li>
                </ul>
                Something cool to both try and be wary for: increasing the maxDepth! Due to how this fractal grows exponentially in size, increasing maxDepth can easily cause Unity to overload and crash. See how far you can push it!
                <br/><br/>
                <b>IMPORTANT NOTE:</b> You should <b>SAVE</b> before attempting to do this experiment. You may be unlucky and lose all of your work.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="submission-and-grading">Submission and Grading</h2>
                <p>
                Use simmer.io to submit your work to this <a href="https://forms.gle/2rtuMmQrcff5A1AU6" target="_blank" className={decalStyles.yellowUnderline}>Google Form</a>. Completion of the “operational fractal” that we guided you in creating will get 4 points (out of 5), and adding your own improvements will get you the last point. There will be extra credit given to those whom we deemed went above and beyond with their improvements.
                <br/><br/>
                Original assignment concept taken from Jasper Flick from catlikecoding.
                </p>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default hw3

export const Head = () => <title>Extended Reality @ Berkeley</title>
