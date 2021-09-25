import { Component, ViewChild, ElementRef } from '@angular/core';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  selectedEmoji:any;

  @ViewChild('appendhotspot') spot: ElementRef;

  select($event)
  {
    console.log($event);
    this.selectedEmoji = $event.emoji;

    //Appending to node
    this.spot.nativeElement.insertAdjacentHTML('beforeend', "<ngx-emoji [emoji]='selectedEmoji' size='16'></ngx-emoji>");

    //Insert within a node
    this.insert("<ngx-emoji [emoji]='selectedEmoji' size='16'></ngx-emoji>");
  }

  insert(html) {
    
    let sel, range;
    if (window.getSelection) {
      console.log("Window Selection => ", window.getSelection)
        // IE9 and non-IE
        sel = window.getSelection();
        
        console.log("Sel => ", sel);

        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            console.log("Range =>", range);
            range.deleteContents();
            

            
            var el = document.createElement("div");//create element directly ?
            el.innerHTML = html;
            console.log("EL => ", el);
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } 
}
}
