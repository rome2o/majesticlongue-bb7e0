import React from 'react';
import _ from 'lodash';

import { markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import { GoPrimitiveDot } from "react-icons/go";
export default class HeroSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');
        const address = _.get(section, 'address');
        const phone = _.get(section, 'phone');

        return (
            <section id={sectionId} className="hero">
                <div className="container container--lg">
                    {title && <h1 className="hero__title">{title}</h1>}
                    {content && (
                        <div className="hero__body text-block">
                            VIP Longue <GoPrimitiveDot /> Bar <GoPrimitiveDot /> Live DJ
                        </div>
                    )}
                    {!_.isEmpty(actions) && (
                        <div className="hero__actions button-group">
                            <CtaButtons actions={actions} />
                        </div>
                    )}

                    {address || phone && (
                        <div className="hero__body text-block directions-block">
                            <span className="address-text">
                                {address && (
                                    markdownify(address)
                                )}
                            </span>
                            <span>
                                {phone && (
                                    markdownify(phone)
                                )}
                            </span>
                        </div>
                    )}

                </div>
            </section>
        );
    }
}
