'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from '../authentication/Input';
import Form from '../Form';
import { useSession } from 'next-auth/react';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Update() {
    const [loaded, setLoaded] = React.useState();
    const [value, setValue] = React.useState(0);
    const [uploadedImage, setUploadedImage] = React.useState();
    const handleImageChange = async (ev) => {
        const file = ev.target?.files["0"];
        let imageUrl = ""
        new Promise((resolve) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                let images = reader.result;
                let imageUrl = reader.result;
                const res = await axios.post("/api/upload", {
                    image: images,
                });

                setUploadedImage((prevImages) => [...prevImages, res.data.links]);
                setLoaded((prevImages) => [...prevImages, imageUrl]);
            };
        });
    };

    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '50%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Account" {...a11yProps(0)} />
                    <Tab label="Bio" {...a11yProps(1)} />
                    <Tab label="Change Password" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Form style={`flex flex-col justify-start items-start gap-4 `} >
                    <Input name="name" placeholder={'Name'} style={`py-3`} />
                    <div className="flex flex-col  w-full  gap-7  ">
                        <div className="flex justify-start flex-wrap items-start gap-7 ">
                            {!!loaded?.length &&
                                loaded.map((value, index) => (
                                    <Image
                                        key={index}
                                        width={900}
                                        // onBlur={() => `${value}`}
                                        src={`${value}`}
                                        height={800}
                                        alt={"Images"}
                                        className="w-[200px] h-[200px] object-cover rounded-md overflow-hidden "
                                    />
                                ))}
                        </div>

                        <label
                            htmlFor="files"
                            className="flex justify-center items-center gap-2 w-[100%] md:w-[50%] lg:w-[25%] p-5 bg-[#1B00EA] text-lg text-white border border-gray-300 rounded-lg cursor-pointer "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                />
                            </svg>
                            Upload{" "}
                            <input
                                onChange={(ev) => handleImageChange(ev)}
                                type="file"
                                name="image"
                                accept="image/png, image/jpeg"
                                id="files"
                                hidden
                            />{" "}
                        </label>
                    </div>
                    <button className='px-8 py-3 rounded-full text-white bg-[#005555]' >Update</button>
                </Form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Bio Update
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Change Password
            </CustomTabPanel>
        </Box>
    );
}