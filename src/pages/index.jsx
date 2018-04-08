import React, { PureComponent } from 'react';
import Banner from '../components/Banner';
import { ComponentMiniPortfolio } from '../components/Portfolio';

class IndexPage extends PureComponent {
  componentDidMount() {
    this.setBannerHeight();
    window.addEventListener('resize', this.setBannerHeight);
  }

  setBannerHeight() {
    this.$sectionHeader = document.querySelector('[data-js="header"]');
    this.$sectionBannerHero = document.querySelector('[data-js="banner-hero"]');

    if (this.$sectionHeader && this.$sectionBannerHero) {
      this.$sectionBannerHero.style.height = `${window.innerHeight -
        this.$sectionHeader.offsetHeight}px`;
    }
  }

  goTo(element) {
    this.window = window;

    this.window.scroll({
      top: document.querySelector(element).getBoundingClientRect().top - 55,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="homePage">
        <Banner goTo={() => this.goTo('#portfolio')} />
        <ComponentMiniPortfolio />
      </div>
    );
  }
}

export default IndexPage;
