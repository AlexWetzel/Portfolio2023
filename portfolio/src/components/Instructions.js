function Instructions() {
  return(
    <p id="instructions">
      <h2>Installing Mods For Monster Hunter Rise</h2>
      <br />
      <h4>Disclaimer</h4>
      
        Modifying Monster Hunter Rise is done at the user's own risk. 
        While CAPCOM does not explicitly prohibit mods, the publisher 
        will not provide support if mods cause unexpected side effects, 
        such as performance issues or save file corruption. It is 
        recommended for users to create a backup save file.
      <br />
      <br />
      <h4>Introduction</h4>
      
        Installing mods for Monster Hunter Rise is the process of 
        incorporating community-created code into your locally 
        installed game files to affect how the game runs. Players 
        choose to modify or “mod” their games for any of the following 
        reasons:
      <br />
      <ul>
        <li>Adjust the game balance.</li>
        <li>Swap in-game models for custom models.</li>
        <li>Add new features.</li>
        <li>Improve the game performance.</li>
        <li>Tweak the in-game graphics.</li>
      </ul>
      
        Mods for Monster Hunter Rise fall under three formats: 
        REFramework mods, Fluffy mods, and PAK mods. This guide will 
        explain how to download and install these three types of mods.
      <br />
      <br />

      
      <h4>Discussion</h4>
      <br />
      <h3>Step 1: Downloading Mods and Tools from Nexus Mods</h3>
      
        Downloading mods and tools from Nexus Mods is the action of 
        navigating to the web site nexusmods.com and downloading files 
        to modify Monster Hunter Rise. Nexus Mods is an online 
        repository for community created mods for hundreds of different 
        games. While Nexus Mods offers paid features, they are not 
        required for these instructions.
      <br />
      <br />
      <h5>Requirements</h5>
      
        A Nexus Mod account is required to download mods. A third-party 
        program, such as 7-zip or WinRAR, may also be required to extract 
        RAR files.
      <br />
      <br />
      <h5>Steps</h5>
      <ol type="1">
        <li>
          Enter “REFramework” in the search bar on the Nexus Mods 
          website. Choose version for Monster Hunter Rise; It should 
          appear as the first option (Figure 1). Click it to navigate to 
          the mod page.
        </li>
        <li>
          Click the files tab on the mod page, then click manual 
          download for REFramework under main files. On the next page, 
          click slow download, and the download process will begin after 
          5 seconds.
        </li>
        <li>
          Extract the file into a new folder once the download is 
          complete.
        </li>
        <li>
          Repeat parts 1-3 for the following mods:
          <ol type="a">
            <li>Fluffy Manager 5000</li>
            <li>VIP Dango Tickets</li>
            <li>Alchemy Enhancement for Sunbreak TU3 (Fluffy version)</li>
            <li>No Crafting Mats for Decorations (PAK version)</li>
          </ol>
        </li>
        <li>
          Put all the downloaded mod files into a Mods folder to organize them.
        </li>
      </ol>
      <h5>Results</h5>
      When finished, we will have the files necessary for completing the remaining steps.
      <br />
      <br />
      <br />


      <h3>Step 2: Installing REFramework Mods</h3>
      Installing REFramework Mods is the process of installing mods for 
      Monster Hunter Rise that specifically require REFramework to function. 
      For this step we will be incorporating REFramework into Monster Hunter 
      Rise and installing a mod that had REFramework as a dependency.
      <br />
      <br />
      <h5>Requirements</h5>
      Monster Hunter Rise needs to be installed on your computer.
      <br />
      <br />
      <h5>Steps</h5>
      <ol type="1">
        <li>
          Open the Monster Hunter Rise directory containing the game files. 
          To find it, open Steam and navigate to your games library. Right-click 
          on MONSTER HUNTER RISE, select Manage, and click Browse local files 
          (Figure 2); This will open the folder.
        </li>
        <li>
          Copy the file Dinput8.dll from the REFramework mod folder and paste 
          it into the MonsterHunterRise folder opened on step 1. Then, start 
          Monster Hunter Rise. If done correctly, REFramework will be installed, 
          and a small, black window will appear over the splash screen on the 
          top-left corner (Figure 3). Close the game.
        </li>
        <li>
          Copy the file VIP_Dango_Ticket.lua from the VIP Dango Ticket mod folder.
        </li>
        <li>
          Navigate into the reframework folder inside the MonsterHunterRise folder, 
          then into the autorun folder. Paste the file copied from part 3 into 
          this folder.
        </li>
      </ol>
      <h5>Results</h5>
      When finished, any skill will activate with a rate of 100% when using a dango ticket (Figure 4)
      <br />
      <br />
      <br />

      <h3>Step 3: Installing Mods with Fluffy Manager 5000</h3>
        Installing Mods with Fluffy Manager 5000 is the process of installing mods 
        for Monster Hunter Rise that are compatible with Fluffy Manager 5000. 
        Fluffy Manager 5000 is used to easily install and uninstall certain kinds 
        of mods.
      <br />
      <br />
      <h5>Steps</h5>
      <ol type="1">
        <li>
          Run Modmanager.exe inside the Fluffy Manager folder. In the manager 
          window, a list of games should be displayed; Select Monster Hunter 
          Rise from the list of games (Figure 5). This will create a new folder 
          called games inside of the Fluffy Manager folder. Close the manager.
        </li>
        <li>Open the folder for the alchemy enhancement mod, called All Skill 
          Fluffy Manager…. Inside, there will be a folder called Alchemy 
          Enhancement. Copy the folder.
        </li>
        <li>Navigate into the games folder in the Fluffy Manager folder, then 
          the MHRISE folder, then the Mods folder. Paste the alchemy mod folder 
          inside here.
        </li>
        <li>
          Open the Fluffy Manager. A new list item will be displayed, called 
          Alchemy Enhancement for Sunbreak TU3 with a toggle button on the left 
          side (Figure 6). Click the toggle to activate the mod.
        </li>
      </ol>
      <h5>Results</h5>
      When finished, in-game talismans obtained from the highest 3 melding tiers 
      will almost always have the maximum amount of skill points and slots.
      <br />
      <br />
      <br />


      <h3>Step 4: Installing PAK Mods</h3>
      Installing PAK Mods is the process of installing mods for Monster hunter Rise that come in the format of PAK files. This process requires that the mod files follow a specific naming convention to work. If you are installing PAK mods, keep track of which files are native game files and which ones are mod files.
      <br />
      <br />
      <h5>Steps</h5>
      <ol type="1">
        <li>Open the game folder, look at existing PAK patch files with the name, re_chunk_000.pak.patch_XXX.pak, where XXX is a 3-digit number, and take note of the highest number. As of version 13, there will be one PAK patch file, ending in 001.</li>
        <li>Open the Mod folder for No Crafting Materials for Decorations. Change the 3-digit number at the end to the number taken from the previous step plus one. For example, if the only PAK patch file was re_chunk_000.pak.patch_001.pak, then rename the mod file to re_chunk_000.pak.patch_002.pak.</li>
        <li>Copy the mod file and paste it into the game folder.</li>
      </ol>
      <h5>Results</h5>
      When finished, you will be able to craft decorations in-game without spending materials.
      <br />
      <br />
      <br />

      <h4>Conclusion</h4>
      Installing mods for Monster Hunter rise is the process of incorporating community-created code into your locally installed game files to affect how the game runs. With the correct tools, the game can be altered in a variety of ways, and players can enhance their game experience however they wish.
      <br />
    </p>
  )
}

export default Instructions;