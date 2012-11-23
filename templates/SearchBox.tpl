{Template {
  $classpath : "addressBook.templates.SearchBox",
  $hasScript : true,
  $css : ["addressBook.templates.SearchBoxCSS"]
}}

  {macro main()}
    
   <div class="content-box">
   	<div class="box-top center">
   		<h1 class="cian">Address Book</h1>   		
   	</div>
   	
   	<div class="box-middle center">
   		<h3 class="grey">Search a contact</h3>
      {section {
        id : "searchInput",
        macro : "searchInput",
        keyMap : [{
          key : "ENTER",
          callback : {
            fn : "navigateEnter",
            scope : this
          }
        }],
        type : "div"
      }/}
   	</div>

   	<div class="box-bottom center">
   		<button type="button" class="search-button" {on click {fn : "searchClicked"}/}><h2>Search</h2></button>
   	</div>
   </div>

  {/macro}

  {macro searchInput()}
    {@html:TextInput {
      bind : {
        value : {
          inside : data,
          to : "query"
        }
      },
      on : {
        type : "textTyped"
      },
      attributes : {
        placeholder : "search by name/surname/office...",
        classList : ["search-input"],
        size : "34"
      }
    }/}
  {/macro}

{/Template}