import { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: '',
		username: '',
		password: '',
		confirmPassword: '',
		gender: '',
	});

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-white">
					Sign Up ChatApp
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-1">
							<span className="text-base label-text text-gray-300">
								Full Name
							</span>
						</label>
						<input
							type="text"
							placeholder="John Doe"
							className="w-full input input-bordered h-10"
							value={inputs.fullName}
							onChange={(e) =>
								setInputs({ ...inputs, fullName: e.target.value })
							}
						/>
					</div>
					<div>
						<label className="label p-1">
							<span className="text-base label-text text-gray-300">
								Username
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter Username"
							className="w-full input input-bordered h-10"
							value={inputs.username}
							onChange={(e) =>
								setInputs({ ...inputs, username: e.target.value })
							}
						/>
					</div>
					<div>
						<label className="label p-1">
							<span className="text-base label-text text-gray-300">
								Password
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
							value={inputs.password}
							onChange={(e) =>
								setInputs({ ...inputs, password: e.target.value })
							}
						/>
					</div>
					<div>
						<label className="label p-1">
							<span className="text-base label-text text-gray-300">
								Password
							</span>
						</label>
						<input
							type="text"
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({ ...inputs, confirmPassword: e.target.value })
							}
						/>
					</div>

					<GenderCheckBox
						onCheckboxChange={handleCheckboxChange}
						selectedGender={inputs.gender}
					/>

					<Link
						to={'/login'}
						href="#"
						className="text-sm hover:underline hover:text-blue-600 inline-block"
					>
						Already have an account?
					</Link>
					<div>
						<button className="btn btn-block btn-sm mt-2">Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
