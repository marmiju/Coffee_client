import One from "./One/One";

const SubBanner = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#ECEAE3] p-4">
            <One src={'/src/assets/images/icons/1.png'} titile={'Awesome Aroma'} desc={'You will definitely be a fan of the design & aroma of your coffee'}></One>
            <One src={'/src/assets/images/icons/2.png'} titile={'High Quality'} desc={'We served the coffee to you maintaining the best quality'}></One>
            <One src={'/src/assets/images/icons/3.png'} titile={'Pure Grades'} desc={'The coffee is made of the green coffee beans which you will love'}></One>
            <One src={'/src/assets/images/icons/4.png'} titile={'Proper Roasting'} desc={'Your coffee is brewed by first roasting the green coffee beans'}></One>
        </div>
    );
};

export default SubBanner;