import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  rect: any;
  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    this.render.listen('window', 'load', () => {
      this.rect = this.el.nativeElement.getBoundingClientRect();
      console.log(this.rect);
    });
  }

  getButton() {
    const node = document.querySelector('.container').querySelector('.btn');
    console.log(node);
    this.insertTooltip(node, 'this is tooltip text');
  }

  insertTooltip(node, title) {
    const tooltipWrap = document.createElement('div'); // creates div
    tooltipWrap.className = 'tooltip'; // adds class
    tooltipWrap.appendChild(document.createTextNode(title)); // add the text node to the newly created div.

    node.parentNode.insertBefore(tooltipWrap, node); // adds tt before elem
    const padding = 5;
    const linkProps = this.rect;
    const tooltipProps = tooltipWrap.getBoundingClientRect();
    const topPos = linkProps.bottom + padding;
    tooltipWrap.setAttribute(
      'style',
      'top:' + topPos + 'px;' + 'left:' + linkProps.left + 'px;'
    );
  }

  cancelTip() {
    document.querySelector('.tooltip').remove();
  }
}
