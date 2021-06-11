import React from 'react'
import ModalVideo from 'react-modal-video'
import axios from 'axios'
import cookie from 'js-cookie'
import CheckoutBtn from '@/components/CheckoutButton/CheckoutBtn'
import baseUrl from '@/utils/baseUrl'
import catchErrors from '@/utils/catchErrors'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

const CoursesDetailsSidebar = ({
    id, price, user, profilePhoto, lessons, duration, title, course_preview_video, loggedInUser
}) => {
    // console.log(loggedInUser)
    const { enroled_courses } = loggedInUser ? loggedInUser : ''
    const router = useRouter()
    // Popup Video
	const [enrolled, setEnrolled] = React.useState(0)
	

    React.useEffect(() => {
        const countEnrolled = async () => {
            const url = `${baseUrl}/api/v1/courses/enrolled/${id}`
            const response = await axios.get(url)
            setEnrolled(response.data)
        }
        // setEnrolled(response.data.enrolled)
        countEnrolled()
    }, [])

    const checkBoughtAlready = () => {
        return enroled_courses.filter(function (val) {
            return (val.courseId === id);
        }).length > 0;
    }

    // console.log(checkBoughtAlready())

    
    const handleCheckout = async (paymentData) => {
        try {
            const token = cookie.get("token")
            const stripeTotal = Number((price * 100).toFixed(2));
            paymentData['courseId'] = id
            paymentData['stripeTotal'] = stripeTotal
            const url = `${baseUrl}/api/v1/courses/checkout`;
            const payload = { paymentData };
            const headers = {headers: {Authorization: token}};
            const response = await axios.post(url, payload, headers);
            toast.success(response.data)
        } catch (error) {
            catchErrors(error, window.alert);
            console.log(error.message)
        }
    }

    return (
        <React.Fragment>
            
            {/* If you want to change the video need to update videoID */}
           
            
            <div >
               

               

                <div >
                    {/* <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-shopping-cart"></i> Add to Cart <span></span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-tag"></i> Buy Now <span></span>
                        </a>
                    </Link> */}
                    {loggedInUser ? (
                        <>
                        {checkBoughtAlready() ? (
                            <button className="default-btn" disabled>
                                <i className="flaticon-tag"></i> Enrolled <span></span>
                            </button>
                        ) : (
                            <CheckoutBtn 
                                handleCheckout={handleCheckout}
                                image={profilePhoto}
                                name={title}
                                price={price}
                            />
                        )}
                        </>
                    ) : (
                        <button className="default-btn" onClick={() => {router.push('/authentication')}}>
                            <i className="flaticon-tag"></i> Login To Buy <span></span>
                        </button>
                    )}
                </div>

            </div>
        </React.Fragment>
    )
}

export default CoursesDetailsSidebar;