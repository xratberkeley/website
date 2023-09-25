import * as React from "react"
import { Link } from "gatsby";
import { CopyToClipboard } from "react-copy-to-clipboard";

import * as decalStyles from "../../../../styles/decal.module.css"
import * as defaultStyles from "../../../../styles/default.module.css"

import Nav from "../../../../components/nav"
import DecalNav from "../../../../components/decalNav"
import Button from "../../../../components/button";

import EastIcon from '@mui/icons-material/East';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import img1 from '../../../../images/decal/OLAB2-0.png';
import img2 from '../../../../images/decal/OLAB2-1.png';
import img3 from '../../../../images/decal/OLAB2-2.png';
import img4 from '../../../../images/decal/OLAB2-3.png';
import img5 from '../../../../images/decal/OLAB2-4.png';
import img6 from '../../../../images/decal/OLAB2-5.png';
import img7 from '../../../../images/decal/OLAB2-6.png';
import img8 from '../../../../images/decal/OLAB2-7.png';
import img9 from '../../../../images/decal/OLAB2-8.png';
import img10 from '../../../../images/decal/OLAB2-9.png';
import img11 from '../../../../images/decal/OLAB2-10.png';

const oculusLab2 = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="oculuslab2" open="oculuslabs"/>
            <div className={decalStyles.textWrapper}>
                <h1>Oculus Lab 2: Building the Gun</h1>   

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Grabbing the Gun with XR Interaction Toolkit"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#grabbing-the-gun"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Firing the Gun (Part 1)"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#firing-the-gun-1"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Firing the Gun (Part 2)"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#firing-the-gun-2"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Sound"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#sound"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Animation"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#animation"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Visual Effect"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#visual-effect"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Check Off"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="check-off"
                            alt=""
                    /></span></p>
                </div>

                <p>
                In this lab, we’ll focus completely on the gun. By the end of the lab, you should be able to pick up the gun, drop it, and fire it with the appropriate effects attached.
                <br/><br/>
                How can we interact with our gun, anyway? If you hold an Oculus controller in your hand, you’ll notice that there are two triggers that we can press. One is with the middle finger, called the Hand Trigger, and the other is with the index finger, called the Index Trigger. Pictured below is the control scheme for any Oculus Controller.
                <br/><br/>
                <img src={img1}/>
                <br/><br/>
                For our gun, we want to implement the following functionality:
                <ul>
                    <li>Hovering over the gun and holding down the hand trigger / grip picks up the gun.</li>
                    <li>While picked up, the gun no longer collides with objects and follows the hand.</li>
                    <li>While picked up, pressing the index trigger fires the gun.</li>
                    <li>When the hand trigger is released, the gun is dropped and becomes a physics object.</li>
                </ul>
                You can download the skeleton for this lab <a href="https://drive.google.com/file/d/1oP98wSPgWyv5UAmYDRQiT1F4F3_IpQbI/view?usp=sharing" target="_blank" className={decalStyles.yellowUnderline}>here</a> - alternatively, you can directly start working off a completed Lab 1! <b>This is a long lab, so please don’t hesitate to ask the facilitators questions or just reach out if you get stuck. We’re here to help!</b>
                <br/><br/>
                After initializing the new project with the skeleton, you will need to install the XR packages again through <b>Window > Package Manager > (on the top) Packages: Unity Registry</b>:
                <ul>
                    <li>Oculus XR Plugin</li>
                    <li>XR Plugin Management</li>
                    <li>XR Interaction Toolkit (if not there: on the top left of the package manager, click the plus and add by name <i>“com.unity.xr.interaction.toolkit”</i>)</li>
                </ul>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="grabbing-the-gun">Grabbing the Gun with XR Interaction Toolkit</h2>
                <p>
                Because of the XR Interaction Toolkit package, we can easily grab objects only using the component system. First, go to the LeftHandController (<b>XR Origin > Camera Offset > LeftHand Controller</b>) and in the inspector, click <b>Add Component</b>, and add <b>XR Direct Interactor</b> with Hide Controller on Select box ticked and Sphere Collider with a radius of 0.2 and check the “Is Trigger” box. Repeat this with the RightHandController.
                <br/><br/>
                Next, go to the Gun in the hierarchy and add the <b>XR Grab Interactable</b> component. Under <b>Movement Type</b>, select <b>Kinematic</b>.
                <br/><br/>
                <img src={img2}/>
                <br/><br/>
                You can try to grab the gun with the grip buttons and feel free to move the boxes in the editor if you cannot reach it. You will immediately notice that there is a rotation problem upon grabbing the gun which prevents accurate shooting. Let’s fix that by adding an offset to the attach transform field on the gun XR Grab Interactable.
                <br/><br/>
                Create an empty GameObject with the name “Attach Transform” with rotation values x = -10, y = -165, z = 0, and drag this child GameObject to the Attach Transform field in the XR Grab Interactable Component.
                <br/><br/>
                <img src={img3}/>
                <br/><br/>
                Ok! Now we can grab and aim the gun correctly. Now let us implement the firing of the gun. Because there are no available The outline of this is as follows:
                <ul>
                    <li>A controller script to read the trigger input from any controller and call a function from the Gun.</li>
                    <li>A gun script with a function called Fire() that fires the gun.</li>
                </ul>
                First, we need to define what a “trigger” is. Because we use an Action-based control scheme (this is Unity’s input handler), we need to define a “Trigger” action. To define, go to <b>Assets > XR > XR Interaction Toolkit > 2.1.1 > Starter Assets</b> and double-click on the XRI Default Input Actions (the lightning symbol). Now we have the “list” of actions that we can use as input.
                <br/><br/>
                Under Action Maps, select “XRI LeftHand Interaction”. To the right Actions window, we can see that there are actions such as Select that read the button press from the corresponding inputs (this is what let us grab earlier). Click the plus on the Actions window and name it Trigger. Next, click on “" and on the Binding Properties window, select <b>XR Controller > XR Controller (Left Hand) > Optional Controls > triggerPressed</b> which will set this action to correspond with the controller's respective trigger button. Lastly, go back to the Trigger action and on the properties window, select Action Type as "Button". It should look like the image below for the left controller.
                <br/><br/>
                <img src={img4}/>
                <br/><br/>
                Do the same for the right controller (ensure the action is for the right controller) and we now have Input Action References that correspond to trigger buttons!
                <br/><br/>
                Now that we can read the trigger, let’s make our first script. Go to the Scripts folder and right-click in the folder and <b>Create > C# Script</b> with the name <b>Hand.cs</b>.
                <br/><br/>
                <img src={img5}/>
                <br/><br/>
                We’ll put in a public variable that represents the controller this hand is attached to (that’ll be set in the editor).
                <br/><br/>
                <div className={decalStyles.code}>
                    using UnityEngine;
                    <br/>
                    using UnityEngine.InputSystem;
                    <br/>
                    using UnityEngine.XR.Interaction.Toolkit;
                    <br/>
                    {`public class Hand : MonoBehaviour {`}
                    <br/>
                    &nbsp;&nbsp;{`[SerializeField] public InputActionReference controllerActionTrigger;`}
                    <br/>
                    &nbsp;&nbsp;{`void Update()`}
                    <br/>
                    &nbsp;&nbsp;{`{`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`if (controllerActionTrigger.action.ReadValue<float>() != 0)`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`{`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Debug.Log("Trigger from " + this.gameObject.name.ToString());`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="using UnityEngine;
                        using UnityEngine.InputSystem;
                        using UnityEngine.XR.Interaction.Toolkit;
                        
                        public class Hand : MonoBehaviour {
                        
                            [SerializeField] public InputActionReference controllerActionTrigger;
                            void Update()
                            {
                                if (controllerActionTrigger.action.ReadValue<float>() != 0)
                                {
                                    Debug.Log('Trigger from '' + this.gameObject.name.ToString());
                                }
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Here, the update function reads the value from the editor-specified InputActionReference and if pressed (!=0), then print the name of the GameObject for that frame. The public and private keywords have the same meanings they do in other programming languages, like Java. However, public variables can be seen and set in the Unity editor, while private ones cannot.
                <br/><br/>
                Now that we have this public value which we can edit in the Unity Editor, go to the Left Hand and Right Hand GameObject in the XR Origin and add the Hand script as a component. We can see a field for “Controller Action Trigger” where we can select the corresponding action reference (click the circle on the right of the field and search for “Trigger”; select the one for the corresponding controller).
                <br/><br/>
                Press play and try pressing the triggers. Something like “Trigger from LeftHand/RightHand Controller” should be printed into the console whenever the trigger is pressed.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="firing-the-gun-1">Firing the Gun (Part 1)</h2>
                <p>
                Now that we’re successfully reading in input, let’s implement our first bit of functionality: picking up the gun. Before we do anything, we’ll add two variables to our Hand class: XRDirectInteractor interactor which references the controller interactable in the same GameObject. We can access the gun and other variables from this interactor.
                <br/><br/>
                <div className={decalStyles.code}>
                    // This should be after the public declaration of InputActionReference
                    <br/>
                    private XRDirectInteractor interactor;
                    <br/>
                    private void Start()
                    <br/>
                    {`{`}
                    <br/>
                    &nbsp;&nbsp;{`interactor = GetComponent<XRDirectInteractor>();`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="// This should be after the public declaration of InputActionReference
                        private XRDirectInteractor interactor;
                        private void Start()
                        {
                            interactor = GetComponent<XRDirectInteractor>();
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                There are three requirements that must be met for us to try and pick up the gun:
                <ol>
                    <li>Our hand must be touching/inside the gun.</li>
                    <li>We must hold down on the hand trigger for that hand’s controller.</li>
                    <li>We must not already be holding a gun.</li>
                </ol>
                Let’s start with the first requirement. How can we detect whether or not our hand touching the gun <b>via script</b>? The answer is with <a href="https://unity3d.com/learn/tutorials/topics/physics/colliders-triggers" target="_blank" className={decalStyles.yellowUnderline}>triggers</a> and checking the Interactor we implemented earlier.
                <br/><br/>
                You might remember from the roll-a-ball tutorial that triggers are a type of collider. Objects with trigger colliders do not collide with other things normally. They freely pass through them and this can be detected via code. For our purposes, we already have a trigger collider when we were setting up the grab interactable where we can detect collisions in the script and check if the other collider is a gun.
                <br/><br/>
                Switch back to Hand.cs in Visual Studio. Add the following function to the class:
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void OnTriggerStay(Collider other) {`}
                    <br/>
                    &nbsp;&nbsp;{`if (other.CompareTag("Gun")) {`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void OnTriggerStay(Collider other) {

                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                This <a href="https://docs.unity3d.com/ScriptReference/Collider.OnTriggerStay.html" target="_blank" className={decalStyles.yellowUnderline}>function</a> automatically gets called every frame our hand touches a valid object. To delve into what counts as a “valid” object, see the chart below:
                <br/><br/>
                <img src={img5}/>
                <br/><br/>
                Our hand has no rigidbody (making it static) and has a trigger collider, so it counts as a Static Trigger Collider. By the chart, it’ll send trigger messages upon colliding with our gun, which is a Rigidbody Collider.
                <br/><br/>
                So now we have a function that gets called when we touch the gun. However, this function could get called when it collides with other things as well, so we need a way to identify whether parameter other is actually the collider attached to our gun. We’ll use <a href="https://docs.unity3d.com/Manual/Tags.html" target="_blank" className={decalStyles.yellowUnderline}>tags</a> to do so.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void OnTriggerStay(Collider other) {`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void OnTriggerStay(Collider other) {
                            if (other.CompareTag('Gun')) {
                        
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Now that we know we’re dealing with a gun, let’s check if requirements two and three are met by checking if the Interactor has a grab selection (if the gun is grabbed by the interactor). If they are, we can certify we can grab the gun via a script! You might want to comment out or delete the Debug.Log statements in Update() so that your Log message can be seen clearly.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void OnTriggerStay(Collider other) {`}
                    <br/>
                    &nbsp;&nbsp;{`if (other.CompareTag("Gun")) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`if (interactor.hasSelection) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`print("Grabbing gun.");`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void OnTriggerStay(Collider other)
                        {
                            if (other.CompareTag('Gun'))
                            {
                                if (interactor.hasSelection) {
                                    print('Grabbing gun.');
                                }
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Our code is now ready to test, but there’s one thing we need to do in Unity first: set the tag on the gun. Select your Gun object in the hierarchy, and in the Inspector view go to Tag > Add Tag. Press the plus button and create a new tag called “Gun”. Then select your Gun again and tag it as “Gun”.
                <br/><br/>
                <img src={img6}/>
                <br/><br/>
                <img src={img7}/>
                <br/><br/>
                Try it out! Stick your hand into the gun and hold down the grab trigger, and check that you’re repeatedly printing out “Grabbing gun.” when you do so. Now with this verified via script, we can now access the exact Gun’s GameObject through the other collider passed through OnTriggerStay.
                <br/><br/>
                <i>Note: This exercise doesn’t actually need the OnTriggerStay since we can verify grabbing and also access the gun through the XR Interactor. We found it necessary to practice the trigger collider system since it is ubiquitous in Unity development.</i>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="firing-the-gun-2">Firing the Gun (Part 2)</h2>
                <p>
                We’ve finally reached the most exciting part of the lab: firing the gun. As always, let’s first consider the requirements that need to be met for the gun to fire:
                <ol>
                    <li>We must be holding the gun.</li>
                    <li>We must press down on the index trigger
                        <ul>
                            <li>But it shouldn’t constantly fire as we hold it down.</li>
                        </ul>
                    </li>
                </ol>
                We’re already checking for item 1 when OnTriggerStay is called, so let us read the trigger value here.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void Update() {`}
                    <br/>
                    {`}`}
                    <br/>
                    {`void OnTriggerStay(Collider other) {`}
                    <br/>
                    &nbsp;&nbsp;{`if (other.CompareTag("Gun")) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`if (interactor.hasSelection) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`float trigger = controllerActionTrigger.action.ReadValue<float>();`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Debug.Log("Grabbing gun.");`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Debug.Log("Trigger value: " + trigger);`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void Update() {

                        }
                        void OnTriggerStay(Collider other)
                        {
                            if (other.CompareTag('Gun'))
                            {
                                if (interactor.hasSelection)
                                {
                                    float trigger = controllerActionTrigger.action.ReadValue<float>();
                                    Debug.Log('Grabbing gun.');
                                    Debug.Log('Trigger value: ' + trigger);
                                }
                                
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                When we press play, we can see that the trigger value can either be a 1 or a 0. Since we should not be able to hold the trigger and keep firing, we need to wait until the trigger value reaches 0 before firing again. Let’s save the trigger value for each frame to reference and overwrite in the next with a float prevTrigger:
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public class Hand : MonoBehaviour {`}
                    <br/>
                    &nbsp;&nbsp;[SerializeField] public InputActionReference controllerActionTrigger;
                    <br/>
                    &nbsp;&nbsp;private GameObject gun = null;
                    <br/>
                    &nbsp;&nbsp;private XRDirectInteractor interactor;
                    <br/>
                    &nbsp;&nbsp;private float prevTrigger = 0f;
                    <br/>
                    &nbsp;&nbsp;...
                    <br/><br/>
                    {`void OnTriggerStay(Collider other) {`}
                    <br/>
                    &nbsp;&nbsp;{`if (other.CompareTag("Gun")) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`if (interactor.hasSelection) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`float trigger = controllerActionTrigger.action.ReadValue<float>();`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Debug.Log("Grabbing gun.");`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (trigger != 0 && prevTrigger == 0){`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Debug.Log("Fire!");`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`prevTrigger = trigger;`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public class Hand : MonoBehaviour {

                            [SerializeField] public InputActionReference controllerActionTrigger;
                            private GameObject gun = null;
                            private XRDirectInteractor interactor;
                            private float prevTrigger = 0f;
                            ...
                        
                        void OnTriggerStay(Collider other)
                        {
                            if (other.CompareTag('Gun'))
                            {
                                if (interactor.hasSelection)
                                {
                                    float trigger = controllerActionTrigger.action.ReadValue<float>();
                                    Debug.Log('Grabbing gun.');
                                    if (trigger != 0 && prevTrigger == 0)
                                    {
                                        Debug.Log('Fire!');
                                    }
                                    prevTrigger = trigger;
                                }
                                
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Ok we can now verify we can hold the trigger and we only fire once!
                <br/><br/>
                But right now, the script only calls functions inside the controller GameObject. Since we can access the Gun GameObject with the interactors, let us first make a new C# script with the name <b>“Gun”</b> with a single public function Fire().
                <br/><br/>
                <div className={decalStyles.code}>
                    using UnityEngine;
                    <br/>
                    public class Gun : MonoBehaviour
                    <br/>
                    {`{`}
                    <br/>
                    &nbsp;&nbsp;{`public void Fire() {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`Debug.Log("Pew");`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="using UnityEngine;
                        public class Gun : MonoBehaviour
                        {
                            public void Fire()
                            {
                                Debug.Log('Pew');
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                To call this function from the Hand script, we need to obtain the GameObject inside OnTriggerStay. We know that the collider’s GameObject is the Gun, so:
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void OnTriggerStay(Collider other) {`}
                    <br/>
                    &nbsp;&nbsp;{`if (other.CompareTag("Gun")) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`if (interactor.hasSelection) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`float trigger = controllerActionTrigger.action.ReadValue<float>();`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Debug.Log("Grabbing gun.");`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (trigger != 0 && prevTrigger == 0){`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`other.gameObject.GetComponent<Gun>().Fire();`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`prevTrigger = trigger;`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void OnTriggerStay(Collider other)
                        {
                            if (other.CompareTag('Gun'))
                            {
                                if (interactor.hasSelection)
                                {
                                    float trigger = controllerActionTrigger.action.ReadValue<float>();
                                    Debug.Log('Grabbing gun.');
                                    if (trigger != 0 && prevTrigger == 0)
                                    {
                                        other.gameObject.GetComponent<Gun>().Fire();
                                    }
                                    prevTrigger = trigger;
                                }
                                
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                If you try the project now, you should be able to print “Pew!” by pressing the index trigger.
                <br/><br/>
                The only thing left is to replace this print statement with proper behaviour. Let’s list out all the things that need to happen when we fire the gun:
                <ul>
                    <li>Gunshot sound plays.</li>
                    <li>Recoil animation plays.</li>
                    <li>Gunshot explosion visual effect (VFX) plays.</li>
                </ul>
                All three of these things will require use of different Unity components.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="sound">Sound</h2>
                <p>
                In Unity, add an AudioSource component to gameobject Gun. AudioSources are what play sounds in Unity. Turn off “Play On Awake” since we don’t want to hear a gunshot every time we start the game. Then assign the clip “Gunshot” to the Audio Clip field (you can either drag it in from the Sounds folder or click the circle on the right).
                <br/><br/>
                <img src={img8}/>
                <br/><br/>
                Next in Gun.cs, create a private variable of type AudioSource called audioSource. Then in Start(), initialize that value to reference the component we just created.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public class Gun : MonoBehaviour {`}
                    <br/>
                    &nbsp;&nbsp;...
                    <br/><br/>
                    &nbsp;&nbsp;AudioSource audioSource;
                    <br/><br/>
                    &nbsp;&nbsp;// Use this for initialization
                    <br/>
                    &nbsp;&nbsp;{`void Start () {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`audioSource = GetComponent<AudioSource>();`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    ...
                    <CopyToClipboard
                        text="public class Gun : MonoBehaviour {
                            ...
                        
                            AudioSource audioSource;
                        
                            // Use this for initialization
                            void Start () {
                                audioSource = GetComponent<AudioSource>();
                            }
                        
                        ...">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Now that we have a reference to the component, we can use it in our Fire() function. To play the clip attached to an AudioSource, call audioSource.PlayOneShot(). Unity also has a function called audioSource.Play(), but it can’t play multiple sounds simultaneously. This would be problematic as we can fire the gun faster than the length of the gunshot clip.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void Fire() {`}
                    <br/>
                    &nbsp;&nbsp;{`audioSource.PlayOneShot(audioSource.clip);`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void Fire() {
                            audioSource.PlayOneShot(audioSource.clip);
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Firing the gun now should give you a satisfying sound effect.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="animation">Animation</h2>
                <p>
                We won’t be getting into the details of animation in this class. If you wish to learn more about it, I recommend first going through some of Unity’s videos on the topic <a href="https://unity3d.com/learn/tutorials/topics/animation" target="_blank" className={decalStyles.yellowUnderline}>here</a>. Instead I’ll give a quick overview of the system. <b>This is optional: if you wish to skip this part and go straight to the next instruction, just look for the next bolded sentence.</b>
                <br/><br/>
                On a high level, Unity’s animation system consists of two parts: controllers and motions. Motions (also called animations) are pieces of data that show how a particular object changes over time; they’re made in either Unity or some other software like Maya or 3DS Max. Controllers, on the other hand, are animation state machines; they contain the logic that dictates what animation plays when, based off of a set of external flags called parameters.
                <br/><br/>
                Parameters are defined in the controller and can be accessed/modified via script. This is mostly how we’ll be interacting with the animation system during the labs.
                <br/><br/>
                Take a look at the Animations folder and double-click the “Gun” controller to open up the Animator window.
                <br/><br/>
                <img src={img9}/>
                <br/><br/>
                Note there are only two “real” states that are connected, Idle and Gun-Anim, and if you click on the Idle state you’ll see it doesn’t have a motion attached in the inspector. The Gun-Anim state does, however: the recoil animation. The green “Entry” state points to what state we start off on.
                <br/><br/>
                Next, look at the arrow going from Idle to Gun-Anim. This is a transition, and tells us that our Gun could possibly move from the Idle to Gun-Anim state.
                <br/><br/>
                In the inspector, you’ll see a box labeled “Conditions”. Conditions list out all the parameter requirements that need to be met for a transition to be taken. This box contains only a single parameter: “Fire”. You can view all possible parameters by clicking the word “Parameters” on the left side of the window.
                <br/><br/>
                The open circle next to the Fire parameter indicates that parameter Fire is a trigger type parameter. When it gets set to true (via script or some other means), it’ll stay true for one frame and then automatically set itself to false again. There are other types of parameters too, such as int, float, or bool.
                <br/><br/>
                What this means is that if our Gun is in the Idle state and we set the Fire parameter to true, it’ll move to the Gun-Anim state and start playing the motion stored there (the recoil animation).
                <br/><br/>
                If you now click on the arrow going from Gun-Anim to Idle, you’ll notice there’s no conditions listed. Does this mean we’re stuck in the state once we get there? Not quite. The checked box “Has Exit Time” above tells Unity that when the motion in the starting state is finished, it should automatically take this arrow. So no other condition is needed to return to Idle.
                <br/><br/>
                Let’s put all of this together now. Our gun starts off in the Idle state, and when we set parameter Fire to true, it moves to the Gun-Anim state and plays the recoil animation. Once the recoil animation is finished, it automatically moves back to the Idle state.
                <br/><br/>
                <b>The optional section ends here.</b> First off, add an Animator component to Gun’s child, Model, and set its controller to Gun (you could also just drag Gun.controller in the animations folder into Model’s inspector view). The animator must go on Model since that’s the 3D model that actually gets animated.
                <br/><br/>
                <img src={img10}/>
                <br/><br/>
                Now in order to start the recoil animation, we need to set the “Fire” parameter in the Animator component, which we can do in code. Switch to editing Gun.cs. We’ll start off by creating a private variable that holds our animator and initializing it in Start(). Since our animator component is on Model, not Gun, we’ll need to get a reference to Model. transform.Find() looks for a specifically named object in all of the base object’s children.
                <br/><br/>
                <div className={decalStyles.code}>
                    ...
                    <br/>
                    private AudioSource audioSource;
                    <br/>
                    private Animator animator;
                    <br/><br/>
                    // Use this for initialization
                    <br/>
                    {`void Start () {`}
                    &nbsp;&nbsp;{`audioSource = GetComponent<AudioSource>();`}
                    <br/>
                    &nbsp;&nbsp;{`animator = transform.Find("Model").GetComponent<Animator>();`}
                    <br/>
                    {`}`}
                    <br/>
                    ...
                    <CopyToClipboard
                        text="    ...

                        private AudioSource audioSource;
                        private Animator animator;
                    
                        // Use this for initialization
                        void Start () {
                            audioSource = GetComponent<AudioSource>();
                            animator = transform.Find('Model').GetComponent<Animator>();
                        }
                    
                        ...">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Then in our Fire() function, we’ll set the parameter to trigger the animation. Unity’s Animator class has a different set function for each parameter type. In this case, we’re setting a trigger type parameter so we’ll use SetTrigger() and feed it the name of the parameter we want set.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void Fire() {`}
                    &nbsp;&nbsp;{`audioSource.PlayOneShot(audioSource.clip);`}
                    <br/>
                    &nbsp;&nbsp;{`animator.SetTrigger(“Fire”);`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void Fire() { 
                        audioSource.PlayOneShot(audioSource.clip); 
                        animator.SetTrigger(“Fire”); 
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Firing the gun now should play a short recoil animation.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="visual-effect">Visual Effect</h2>
                <p>
                Just like with animation, Unity has its own complex system for creating and manipulating visual effects that won’t be in scope for this class. If you wish to learn more about it, I recommend starting with Unity’s <a href="https://unity3d.com/learn/tutorials/topics/graphics/particle-system" target="_blank" className={decalStyles.yellowUnderline}>video</a> on the topic.
                <br/><br/>
                In folder Prefabs/Particle Systems, we’ve provided a gunshot VFX for you called “MuzzleFlashEffect”. Drag it into the editor as a child of Gun. It should already be positioned correctly in front of the gun barrel (where the VFX will play). If not, change its transform to what’s shown below.
                <br/><br/>
                <img src={img11}/>
                <br/><br/>
                All that’s left is to play the VFX here in script. Switch to editing Gun.cs. Like the previous two sections, we’ll start by creating and initializing a variable that’ll reference the Particle System.
                <br/><br/>
                <div className={decalStyles.code}>
                    ...
                    <br/>
                    private AudioSource audioSource;
                    <br/>
                    private Animator animator;
                    <br/>
                    private ParticleSystem particleSystem;
                    <br/><br/>
                    // Use this for initialization
                    <br/>
                    {`void Start () {`}
                    &nbsp;&nbsp;{`audioSource = GetComponent<AudioSource>();`}
                    <br/>
                    &nbsp;&nbsp;{`animator = transform.Find("Model").GetComponent<Animator>();`}
                    <br/>
                    &nbsp;&nbsp;{`particleSystem = transform.Find("MuzzleFlashEffect").GetComponent<ParticleSystem>();`}
                    <br/>
                    {`}`}
                    <br/>
                    ...
                    <CopyToClipboard
                        text="    ...

                        private AudioSource audioSource;
                        private Animator animator;
                        private ParticleSystem particleSystem;
                    
                        // Use this for initialization
                        void Start () {
                            audioSource = GetComponent<AudioSource>();
                            animator = transform.Find('Model').GetComponent<Animator>();
                            particleSystem = transform.Find('MuzzleFlashEffect').GetComponent<ParticleSystem>();
                        }
                    
                        ...">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Then in our function Fire() we’ll make the VFX play.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void Fire() {`}
                    &nbsp;&nbsp;{`audioSource.PlayOneShot(audioSource.clip);`}
                    <br/>
                    &nbsp;&nbsp;{`animator.SetTrigger(“Fire”);`}
                    <br/>
                    &nbsp;&nbsp;{`particleSystem.Play();`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void Fire() {
                            audioSource.PlayOneShot(audioSource.clip);
                            animator.SetTrigger('Fire');
                            particleSystem.Play();
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Firing the gun should now create a spark of muzzle flash at the front of the gun.
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

                <h2 id="check-off">Check Off</h2>
                <p>
                <i>This marks the end of lab 2! To check-off successfully, let a facilitator see your current project and show them that you can pick up, drop/throw, and fire the gun properly.</i>
                </p>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default oculusLab2

export const Head = () => <title>Extended Reality @ Berkeley</title>
