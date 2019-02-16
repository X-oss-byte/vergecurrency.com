import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const sponsorList = require('../lists/sponsors-2019').sponsors;

export const Sponsors = () => {
  const WhalePackage = sponsorList.whalePkg.map(s => (
    <div
      className="col-xs-6 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a href={s.url} target="_blank" rel="noopener noreferrer">
        <LazyLoad height={s.height}>
          <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
        </LazyLoad>
      </a>
    </div>
  ));

  const DolphinPackage = sponsorList.dolphinPkg.map(s => (
    <div
      className="col-xs-3 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a href={s.url} target="_blank" rel="noopener noreferrer">
        <LazyLoad height={s.height}>
          <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
        </LazyLoad>
      </a>
    </div>
  ));

  const GoldfishPackage = sponsorList.goldfishPkg.map(s => (
    <div
      className="col-xs-3 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a href={s.url} target="_blank" rel="noopener noreferrer">
        <LazyLoad height={s.height}>
          <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
        </LazyLoad>
      </a>
    </div>
  ));

  const MediaPartners = sponsorList.mediaPartners.map(s => (
    <div
      className="col-xs-3 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a href={s.url} target="_blank" rel="noopener noreferrer">
        <LazyLoad height={s.height}>
          <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
        </LazyLoad>
      </a>
    </div>
  ));

  return (
    <div className="row center-xs sponsors">
      <div className="col-xs-10 pt-small pb-large bb">

        <div className="row center-xs middle-xs col-xs-10 col-xs-offset-1 border__lines">

          <div className="col-xs-12 center-xs col-sm-4 start-sm">
            <p style={{ padding: '10px 0' }}>
              Executive
              <br className="hidden-xs" />
              {' '}
              Sponsor
            </p>
          </div>

          <div className="col-xs-10 col-sm-7">
            <div className="sponsors__single" role="presentation">
              <a href="https://www.vergecurrency.com" target="_blank" rel="noopener noreferrer">
                <LazyLoad height="100">
                  <img className="img-responsive sponsors__logo" src="../static/img/meetup-2019/sponsors/new.jpg" style={{ maxHeight: '100px' }} alt="You?" />
                </LazyLoad>
              </a>
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>Whale Sponsors&nbsp;&nbsp;</p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {WhalePackage}
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>Dolphin Sponsors</p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {DolphinPackage}
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>Goldfish Sponsors</p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {GoldfishPackage}
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>
              Media
              <br className="hidden-lg" />
              {' '}
              Partners
            </p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {MediaPartners}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
