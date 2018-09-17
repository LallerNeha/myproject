import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ckeConfig = {
            height: 400,
            language: "en",
            allowedContent: true,
            toolbar: [
                { name: "clipboard", items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"] },
                { name: "links", items: ["Link", "Unlink", "Anchor"] },
                { name: "insert", items: ["Image", "Table", "HorizontalRule", "SpecialChar", "Iframe", "imageExplorer"] }
            ]
        };

    openImageExplorer= function($event: any) {
        this.showFiles = true; // open pop-up window
    }
    onCloseImage= function() {
       this.showFiles = false; // close the pop-up window
   }

   onAddImage= function() {
       try
       {
           let link = this.ckeditor.instance.document.createElement("img");
           link.setAttribute("alt", "Image");
           link.setAttribute("src", "./Images/test.png");

           this.ckeditor.instance.insertElement(link);
       }
       catch(error)
       {
           console.log((<Error>error).message);
       }

       this.showFiles = false; // close the pop-up window
   }
   onChange = function(event){
     console.log(event);
     this.content = event;
   }

}
