import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  rect: any;
  @Input() toolTipType = 1;

  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    this.render.listen('window', 'load', () => {
      this.rect = this.el.nativeElement.getBoundingClientRect();
      console.log(this.rect);
    });
  }

  getButton1() {
    const node = document.querySelector('.container').querySelector('#btn');
    console.log(node);
    this.insertTooltip(node, 'This is Tooltip Text', 'tooltip1', 'tooltip');
  }

  getButton2() {
    const node2 = document.querySelector('.container').querySelector('#btn2');
    console.log(node2);
    this.insertTooltip2(
      node2,
      'This is Tooltip Text 2',
      'tooltip2',
      'tooltip2',
      30
    );
  }

  insertTooltip(node, title, id, className) {
    const tooltipWrap = document.createElement('div'); // creates div
    tooltipWrap.className = className; // adds class
    tooltipWrap.id = id;
    tooltipWrap.appendChild(document.createTextNode(title)); // add the text node to the newly created div.

    node.parentNode.insertBefore(tooltipWrap, node); // adds tt before elem
    const padding = 2;
    const linkProps = this.rect;
    const nodePos = node.getBoundingClientRect();
    const nodePosOffSetTop = node.offsetTop;
    const nodePosOffSetLeft = node.offsetLeft;
    console.log(nodePos);
    console.log(nodePosOffSetTop);
    const leftPos = nodePosOffSetLeft;
    const topPos =
      nodePosOffSetTop +
      nodePos.height +
      parseFloat(
        window.getComputedStyle(node, null).getPropertyValue('padding-top')
      ) +
      parseFloat(
        window
          .getComputedStyle(tooltipWrap, null)
          .getPropertyValue('padding-top')
      ) /
        2 +
      padding;

    // 1;
    tooltipWrap.setAttribute(
      'style',
      'top:' +
        topPos +
        'px;' +
        'left:' +
        leftPos +
        'px;' +
        'transform: Scale(1)'
    );
  }

  insertTooltip2(node, title, id, className, translatePostion) {
    const tooltipWrap = document.createElement('div'); // creates div
    tooltipWrap.className = className; // adds class
    tooltipWrap.id = id;
    tooltipWrap.appendChild(document.createTextNode(title)); // add the text node to the newly created div.

    node.parentNode.insertBefore(tooltipWrap, node); // adds tt before elem
    const padding = 4;
    const linkProps = this.rect;
    const nodePos = node.getBoundingClientRect();
    const nodePosOffSetTop = node.offsetTop;
    const nodePosOffSetLeft = node.offsetLeft;
    console.log(nodePos);
    const leftPos = nodePosOffSetLeft - padding;
    // parseFloat(
    //   window
    //     .getComputedStyle(tooltipWrap, null)
    //     .getPropertyValue('padding-right')
    // ) /
    //   2;
    const topPos =
      nodePosOffSetTop +
      nodePos.height +
      parseFloat(
        window.getComputedStyle(node, null).getPropertyValue('padding-top')
      ) +
      parseFloat(
        window
          .getComputedStyle(tooltipWrap, null)
          .getPropertyValue('padding-top')
      ) /
        2 -
      translatePostion +
      padding;

    // 1;
    tooltipWrap.setAttribute(
      'style',
      'top:' +
        topPos +
        'px;' +
        'left:' +
        leftPos +
        'px;' +
        'transform: translateY(' +
        translatePostion +
        'px)'
    );
  }

  cancelTip(id) {
    document.querySelector(id).remove();
  }
}
