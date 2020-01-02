import React, {Component} from 'react';
import Navbar from '../Components/Navbar2';
import Footer from '../Components/Footer';
import "./AboutUs.css"

export default class AboutUs extends Component {
    render() {
        return(
            <div className="about-height">
                <Navbar/>
                <div className="about-wrap">
                    <h2>About Tenshi</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit nisi sit amet sem tempor ultricies. Donec cursus, purus vel ullamcorper lacinia, nibh tortor posuere ligula, sit amet sagittis purus metus eget orci. Ut in augue a odio lobortis suscipit sit amet id risus. Fusce ante nibh, tincidunt non viverra at, pulvinar quis nisl. Etiam vel elit hendrerit leo efficitur condimentum non a dolor. Curabitur sagittis cursus erat in auctor. Nam quis dapibus ipsum. Nunc sodales orci vitae fringilla blandit. Phasellus sed diam suscipit, tempus enim non, tristique velit. Curabitur faucibus magna nec nulla posuere ultrices finibus ullamcorper nulla. Donec vulputate aliquam quam. Sed sed magna ultrices, tempus velit eget, ornare metus. Sed at rhoncus augue. Fusce posuere nibh quis porttitor vestibulum. Donec dolor mi, eleifend pretium dapibus at, sodales tincidunt orci. Sed nec diam magna. 
                    </p>

                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae nunc quam. Donec facilisis tempus mauris, eget molestie enim lobortis sed. Ut ullamcorper quis mi et suscipit. Sed ut suscipit tellus, nec tincidunt ligula. Donec pellentesque non purus eu maximus. Quisque imperdiet ligula sit amet accumsan ultricies. Nullam mattis placerat nisl, et molestie nulla molestie vel. Nunc mollis nulla at dignissim pharetra. Curabitur non lacus eu ex cursus efficitur. Cras ut porta metus, eu pretium risus. Quisque neque arcu, scelerisque sed mattis id, blandit sed massa.
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}

