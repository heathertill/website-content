import * as React from 'react';
import { useState, useEffect } from 'react';
import { User, json } from '../../utils/api';
import { wayToGo } from '../../utils/formService';
import submitEdit from '../../utils/submitEdit';
import SubmitEdit from '../../utils/submitEdit';


export interface AboutInfoProps { }

const AboutInfo: React.SFC<AboutInfoProps> = () => {

const []

    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
                <SubmitEdit editable />
            </form>
        </section>
    );
}

export default AboutInfo;