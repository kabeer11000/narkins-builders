<?php
function minify_output($buffer)
{
    $search  = array(
        '/\>[^\S ]+/s',
        '/[^\S ]+\</s',
        '/(\s)+/s'
    );
    $replace = array(
        '>',
        '<',
        '\\1'
    );
    if (preg_match("/\<html/i", $buffer) == 1 && preg_match("/\<\/html\>/i", $buffer) == 1) {
        $buffer = preg_replace($search, $replace, $buffer);
    }
    return $buffer;
}
?>
<html>
<head>

<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
  <model-viewer shadow-intensity="1" style="width: 100vw; height: 100vh" id="shoe" camera-controls touch-action="pan-y" src="<?php
echo isset($_GET['model-uri']) ? $_GET['model-uri'] : 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/MaterialsVariantsShoe/glTF-Binary/MaterialsVariantsShoe.glb';
?>" tone-mapping="commerce" ar alt="A 3D model of a Shoe">
    <div class="controls" style="padding: 1rem; display: none">
      <div>Material: <select id="variant"></select></div>
    </div>
    <div class="controls" id="color-controls" style="padding: 1rem; display: none">
    <button data-color="#ff0000">Red</button>
    <button data-color="#00ff00">Green</button>
    <button data-color="#0000ff">Blue</button>
  </div>
  </model-viewer>
  <script>
    const modelViewerVariants = document.querySelector("model-viewer#shoe");


    // Function to send message to the parent frame
    function sendMessageToParent() {
      var message = 'Hello from child!';
      window.parent.postMessage(message, 'http://localhost:3000'); // Change URL to your parent frame's domain
    }

    

    const select = document.querySelector('#variant');

    modelViewerVariants.addEventListener('load', () => {
      const names = modelViewerVariants.availableVariants;
      for (const name of names) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
      }
      // Adds a default option.
      const option = document.createElement('option');
      option.value = 'default';
      option.textContent = 'Default';
      select.appendChild(option);
    });

    select.addEventListener('input', (event) => {
      modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
    });
    
    
    // Event listener to receive messages from the parent frame
    window.addEventListener('message', function(event) {
        console.log(event);
        const materials = modelViewerVariants.model.materials;
        console.log(materials[0].name)
        // if (!['http://localhost:3000', 'https://kabeer-3dmodel-store-demo.vercel.app'].includes(event.origin)) return; // Restrict messages to a specific origin
        switch(event.data.type) {
          case "base-color":
            console.log('set-color', event.data);
            for (const material of materials) material.pbrMetallicRoughness.setBaseColorFactor(event.data.value);
            break;
          case "material-color":
            console.log('set-color', event.data);
            (materials.find(({name}) => name == (event.data.material))).pbrMetallicRoughness.setBaseColorFactor(event.data.value);
            break;
        }
    });
  </script>
  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    model-viewer {
      background-color: #FAFAFA;
    }
  </style>
</body>

</html>