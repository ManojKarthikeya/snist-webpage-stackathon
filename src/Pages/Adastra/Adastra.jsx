import React, { useEffect, useState } from "react";
import "./adastra-styles.css";
import "./adastra-styles2.css";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import app from "../../firebase/firebase.util";
import ReactPlayer from "react-player";

import FormInput from "../../Components/Form-input/form-input.component";

async function updateCount(setCount) {
	const db = getFirestore(app);
	const querySnapshot = await getDocs(collection(db, "adastradet"));
	setCount(querySnapshot.size);
}

export default function Adastra() {
	const db = getFirestore(app);
	const [count, setCount] = useState(0);
	async function submitHandler() {
		try {
			const docRef = await addDoc(collection(db, "adastradet"), {
				name: name,
				phone: phone,
				branch: branch,
			});
			setCount(count + 1);
			console.log("Document written with ID: ", docRef.id);
			setName("");
			setPhone("");
			setBranch("");
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [branch, setBranch] = useState("");
	useEffect(() => {
		updateCount(setCount);
	}, []);
	return (
		<div className="adastra-container">
			{ar.map(() => (
				<div key={Math.random()} className="firefly" />
			))}
			<div className="adastra-webpage">
				<div className="adastratitle">
					<div className="adastraHeading">ADASTRA</div>
					<div className="adastra-subtext">REACH FOR THE STARS</div>
				</div>
				<div className="adastra-desc-cont">
					<img
						src="data:image/jpeg;base64,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"
						className="adastra-img"
						alt="adastraimg"
					/>
					<div className="adtext">
						<strong>ADASTRA&nbsp; </strong>is a Latin phrase that
						means, '<strong>REACHING FOR THE STARS</strong>'. It is
						a flagship event of IEEE - SNIST. Every new year begins
						with the coming of ADASTRA, which is not just a fest,
						but a 3-day celebration at SNIST. With well-equipped and
						unique workshops, ADASTRA sets a benchmark for various
						college fests in the city.
					</div>
				</div>
				<div className="adastra-desc-cont">
					<div className="adtext">
						The first day of the fest is the ADASTRA SUMMIT, where
						the finest speakers of the county enlighten our students
						with their powerful words. The celebration continues
						with various technical events and paper poster
						presentations.For all the Shakespeares around, a wide
						range of literary events are hosted all through the
						three days. Being a huge and successful tech-fest,
						ADASTRA never misses the fun part.
					</div>
					<img
						src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTExYUFBUXFxYYGRkZGRkYGRsYHBgYHyEbGhkbGR4cHikhGxwmHBobIzIjJiosLy8vGCA1OjUuOSkuLywBCgoKDg0OHBAQHDcnIScvLi4uMC4xNy4wLi4uLi4uLi4uLi4uLi4sLjEuLi4uLC4uMC4uLi4uLi4uLi4uLi4uLv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAFAAMEBgECBwj/xABKEAACAQIEAwUEBwUGAwYHAAABAhEAAwQSITEFQVEGEyJhcTKBkaEHFEJSscHRFSNi4fBTcoOSwtIzk/EWF2OCosMIJENUstPi/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EADMRAAICAQIFAQYEBgMAAAAAAAECABEDEiEEEzFBUWEFFCKBkaFCccHRFTJSsfDxIyTh/9oADAMBAAIRAxEAPwDkj2+6BW4JKkgZWy8xDTBzddtq0xfEXuKqk6LoAddNZJJ1n9Kaxlx7jCR4oA0nxTqNPeK3wrWwYuW9BEwSrEdefI7Aa0unayN5h6w/wC4xhGEJENn5Rzj9Ty2pPxSwpNru1QNp3qqQwGwJkkmeu+la8QvWBdLh27ycrrcBG8QQQAAABEEUJ45fVsoRgyiSpiCAdSp6wdjXOMZZtx1mU7GT7PDn7m/cLZkZSVYGQWVtQehjxeYM1Awt6FKiSCAHGkkbys/aHKlwaYvKdu5dgPMRBHnFRlbeDrHQ++IFdGk3LYn0qZY8HiLZVAgUuPEJHsidZ6mK1/b94XYDjKSoAI0HLTy51XrLKhPiDAiNjAMjXUcqT32B1g/P+hUsmAFrO/5zYtIU31l94jwrPba4tzL9pyCcojwnwg6yOQEkjzoTcxxuplzMqgKTmhmIWBmltzBJ8p0oPa43dAhSAYOaADM6aTOkR762uKVsZ49p4HooMn0k/KlRHUBWMfh1GhpY+C8XunMli6tl1knwo4uIN82YTKjWBGk9Ku+E45iFcXUv2yCgVV7tAEczGTLbkgwTDCY1muLJi2V1YaZXBB5+GNA28eXnVmwwuXroC2+7AK3dyBGmw5nUCBykUOI1rRBrzJruJ0LjvFr11S95j/w0GXJlV2YgE5gPZB1AOojlUQYRmfKhXIrkZYA7x4DtmBI0jeOXWhHax2NlrjXEzKADG4HsgQRMZyZ/OKF8A7RXkIuKgud2CVtkZd4zt/EcoI3095rzSmTKoe4FF9ZauP8ADrCtbuZwboVSAiysFtHUCQBIg/GhD8YuZ3S5cVk3VCgYLGihc0GTvHnt0mcLm4zYwF0DITb9kyRIKELB1nSBoSd9Kr3HcDjMVdWbeZ7awQAFidiTMc4A3351sagtTn6x0NBiVvb9ev5y6XMY1sW/sAoQ6hlBLEgZVXcQd4GmlQMRh1v97fVk8KsuXxANAMjUjNEDQc4rWxh7rqty/F0ouXO65CrDxHLA31IMiNKq7cYvWDctsQUOZntlQcsmBpzjQSOR9IniwAn4DvJhSwJ7CQcVjXstcSzdHds+cXF0ZpE5TpqIOvLeiX7VuB0uOoMkup0aRIDSNI1EZehG1DMVhlKSWORbYyFdzJCxl0y6zvBiOtPJiybN2CYRQxDGOcCBEbsK9B1B6CRsXLrY4nhrLWjeVkYllW6IQIpnLmDEFYBIgEkADcGnrfaXChWPehij3JGQ5rik6MI8BygAA9DNc54rxsPhLVqPH3jNcM7mBlPz5HlQS0WcgeIjbT4fhQXhA+OnHn/coumiTOqcL4oMYyWmDAvluEFhK5TMrpLax8aJ3rdtEu2UDlmLqBIJUgZZBJ8Mgn3CqTwvgDpcW6zPbyZQDJLZ9IXSNI8oij/157d5roVSCJUBR4pILDQ6cz7zXBm4YA/8Z+XrGX+WzGreKe3cbKcxAk5gSMogA/w6xIHNacxfFwy2i3iuBkt+NsqgmBD6nwzqDpzFNWcF34NzxqCxIKkKpU6lADMwwK+8Vtgb696S7qCrZE0XNMBiAIMxG451cY11apsbgIysOvQwDxq86Yx87WwqEkICCuQwTyjN4p01M1Hw9my5uDvCog3QR41LAkw2UTrynaDNEO0OA7zEF5AS5qXGaQxMlSWE7EAbCBFBEvmyzABYLGPDEpJ2jb5/CusUR8Mn0lkXEp3Vt0lVWO8OWV7yOhIZQfFzOoEbVvhS2ILW2VcynMrZpA35DkRmMRpVaOJFoOCO8zJoGLLodtxJ3Om2m5pm3iLi5GVgpIVTlY6iRtrvpty99T5Nw3OgnD3e8UhxdCqpkEZbczMx5AAHen+I4koiytpbhYE5wWzLqWAJ0LCNxqffVUxVm+L7WUC28y5lg5YtzmkS/icHQz0JqwXWMW4ZWKKCz5oBaCRowOUwF061xPjCkEkekcHaR1yWWAxDor3AzOUiGJIIMc4UQBy86HYbHBHCvduO+eMhK/8ADZtCRuHgj2QKnNw5Rdd70ZtxJgFeTqQR0022rF/hVpLjszTcY5rcsfGSDodNgdfjVMbodj3+n+piNoBx3EbOdsyOWnUhRB9JNKiFuyhAhX6bMRI0MSBpO3lFKqWnr9ZPRLB+x7EpcNsG4gUK2s6aLMbx50NwvBLT4q8GRWVGtvrOYErIAPNZnTzFHLbaKPMfLX8qjcHP7/Ff37fw7ta+jKjaQ1GSL/AMPcupeNsZ0JOgADHYZxzI5UCtdk7F2/fZlBVgGtKsoI+1lj+Ln51arqhtOU6gc/I+VbXkzQR4WX2T+R6qelEpcUNUofEOx64bBF9TiGhTDSPEQMoGnlrUXGdg71sWFRiWunLdgaW5gmSDqog77x51de1JP1csd1e03wdTRwXKXli43MNTmHDfo9u3sd9TFyFK5++NskRG0TvOkTyohhPopxN1MVNxVfDXHtqpRy10KMwKR9lp00O5rqXZp/8A5m36n8DXRKjlGk1Ko1ieX1+jTFDAHGEOLm5s922cIdmGhzToY0IB8oqNazC09pluW3s21cZrYjUrmG0zLgx5HaK9NX7KW7LKuiweZOrGTv5mvOfbDiWIXHYgJeYKH0XkPCtKNJHxCPZ6Sk3sO2cKJMtAkEAs3SinF8RdIQ6AMzEPqGDg+JPLLMabiDRzhXFL73bau5JzrowUjnqDHlTA7VXe/UFbZBlSCojQ6N6xI99M2NXomLrK7QdcxtzEpZw8AOD7ZJhgdiR1zZuXOmMPw7E3bjW1AzWyUImNRv6kxVj4Zx9b+ItTh7auTlzDpvBEa0RwPZ1r13Fi6pTNCh10C3BqSo05R5GhyESlVetxRmkTs9xRrKlbipftocg1BFq4JYMpA2OsTvp0iiWE7Qv9YD3bVxlEMLaMDmYg5SV9Y2mplnsTZtpdykuzgRm2zDXUDQ67aaTQnspdS2jLetM4a4gtusgW3GwckjUkefKuHJwShrYdY6OGEndpu0FwDu8jW3dMr2yokAz9oHcgzO+tUxLY7zI5iC2rSYkSA3PbSuiYKxZvksQZBECAMpXYhtz+HlUDtS1nDhycOXS4FzEIpUOPZA5gmI0FZeBOJLA7+d4gygkiVHB4tLcqQLngISQMqsfCGIOpIB/XrUQWFAyXc1p+8Ks5lwBA8OXnpJmddKs/EeC2AbamEZiMqqG0DeySY8Ww26npTvFbNm4rWGuWw6Mvds5YEKIVidthpB6VDUcZ+IH1jKLlJxvDrKK+R2ueIBDBUEc2ggHXaDUe6CEKhREA76wdifn8auXZ/ga4i+uHS4GYggFFzAjUzy8I1M9KmY3g2Gt3PqzAC6l2H8XhYjbMCYzGYgaamTTniO9HrAFMonDsRctyQxKnwkZmENyOmun4TUwlw4YtnTNOaIVvveEajU+XOpPaDAX0xb/umHjlU7vw5IGsagrHPWiONu2+5Q2xLZT+7CmFyiBrl9o89eegpnawD3MJB6R3DcSYKZZy3sqobwkE+IKCIBid6Y4f3qXYhVCl8h8JuANOhkatrG2lQOH2e8KoDlMF2FxgqoslgZ5wvUDUgbUeR2D2ltZO8FwMWyLoSIg8zl6QRI+EiCtgwi6hTH8Itm1aRJcsQwDMe8k9QNIkc4k1BvcMKsC75pbKT7LW10XKDtGp15QKOYzhjC0zo5S6qKzusjMx9owDofCp90VUr+OxF+1ayowNuQwWSXIjxgkmI8qhpYi72hbbaBGLsriT3IdQAYYhVJXTMd4PLeneE8VWyTcKd4wY5Rlic2k5tgAQFgDnvpUxuA3rxtlUukMZJOuugaJ5yeetFMX2Wtu3hueyMpaSwmYYsTp7ROq7c66jkXo3eAXM4XgOe9bu3bouOyF8oAICtPh12gtpJn3VvZvgXTZdgv7sOjXCZJIlrZMAExHkNd624Rhb1vvktP4CSHuDxEgE+yYjKRAkgHXSpXDLQWMyK0hgruJhYJhRoSYgR5n1rjcgk2b8RwZKxF1yxuJcUICFUIuZTnEIM0xI1/zedRuJ2XtpLwpIzbEyASNBMDbcCYI9azrbti4oJVUOV2jfXkN9ANdYOnKgmBxtsvkYFu8ltTGTQlTIJ1KxMxrFTXG28JaGmst9ppPMxmk89Y1pVBXi7jRFXLyzGDHmM2lKp8poJOu8XVDBIED7R3J2jqd6G8L4wxuX7ghQWRdpIyqAdJ31+VUjhuLfNlJDLzDnlrOWdjWy4q2pIKtPeE6kLKEAQ3Q6fOvpjkJkDjIl0HakqRAJnWWgbmNcpMCRRFO1YLhIAMeINK69B1rnGhYLKxBYlZJjeDRIpbUlpzHLmAIYhm5DXnHlQGRxFKiHuN9rhdtPayQTAnMDsQdhyqxYXjyXApQmeaxv5TXMbMXb2uVVMmByIB294qxcKS3atd4zKwgZwWy5BOhXTMTyiptxRQ7943LFTrvY66GxNuJ+1vpyNdLrjP0Z9oLN/FqlssSoJ8QjSCNDzrrmOx1qyhe7cS2g3Z2CKPeTFUd9RuHGKFRcSH7p/wC6a81dsMDc+uYgqjkZ94JnQbHn091dr7UfSHw7D/url8F2UMAitcGU7HMoK+e9cC7Udoy2Lv3LLs1pnlSCwBEAaDlrNZarePuekm8DsXBeTMjgBp1UjkR+dCH4beW9bzWyJZo8zBP4UY4RjbjhbgdypbKRmJytDGD6xI6igGI4xflSbryrSDO0gj8DV1rT85Fr1VCnZ/hd5MRaZ7bKA2pNdcuNXIez3F71zEWle6xUtqCd9669Zw1y4TkUmNzyHqeVdK0BcgetSu8V7a4fD3GtP3hZSubKuizrzInlt1qHdxYtXHKv+4v22v24iHfKfCZ23n4U92w+ivGX8+JtXLbZgpNomDAEE5tp02oN20x1uxat4BbJJtqjm5J8Ahs2hkmRrv06Vx5HDXfbpOlEqqm3Y7E94zeODmMiI2/lFXt7SOIcBhodRzGoNUjsKqZDEZp1667GroG0rpwi0nM+zSicRwN3CuL167bNpSpVbi95NzXKtsABhAA1Ecz6ksRhMHjyMRbE6sl0MCD7Og12OoM0U7S8CbGW0t2yFuhwyOTAUwfaP3eVROC9mbuAtvbvPbd3uZ5ttmWIjeBrM8qmuIB9JFjrvKE/BqvePdkuzlqzj7F9M2VCxK6mCVIGWNhrtQ/jmAu38TiMSxyhrjMg11Zf3YBjcAKFPmD6Vcey2XvpacqqzEg5SABM1TfpY70XcHattlZ8MrkEx4md3Yk+s1ycZhF0u0fC5I3g3iPFmVRbe0SgIUtmbN3ZOoUwSp3mOs8qaThF1jbbByyR4rF2EuqCACdNHHmuuvs0Z7P2XCraYeIAMXOviJmdeWtXTs7wwJMLJLe4gflXBiI1aTOg9LgPgH0fMLF27futBQyYggAHw9IBn8DpTv8A2YC5XFoC3OZXgAux0JAneQDP610DjOMtjDXrayWazdlRrHhMnegOL+sX7Cd0QSLCQyxOYgEHcjnt5VXLhVht9oDKT2jx5CMEgMsBs4UGBBMCYadPnVPxuKxGcBBCATlBkFVMNqANc25HSui3eB5m73EFsqqiBBMvcMZpHr+dR+KYbD3Fbu0FsLLCCGMCM4E/ZOUMf7prkrQovfwISNyJU+E4zEX1DMWtohm2A+UCQJ0BBYjQ7cjVkQSLaXAWVS+Y5ftEEgtAMgfwz7Qobh+HCyzRfKrcDyAoIzGJIjUaU9bw2dkLM7FSMqA6Op/4jMI5wI9Nd6k51H9Isk/VtAZAU6mQSQZza5dJEb8gKj3rKqpcxDKQndscp9x8Mga+cRUDiwxBUXVLSGjupEZT4SSdAGjfWNDUDiXH7FlBoLpYNChsuU7ZmiRPlU0wuR8G8djJuGFtbAhUKGbalWMszaQVIkahRA5SdqDcRwdy1be6t1QjMwBUEF2zCMoO0R5adan8J4xYvWwsG1btgLcViDnDSM2YD2uulV7B9ob8BVRTaUEd2FMKIOs9dZk7xXZjxNZ9OtwAXI1q/iIGre+SffSqaO17gANh7DEAakGTpoT4ulKr6G/pENQla7MFLCtErdGYMd+h9CP1qn8SQLcZV2XTrJG5Pvrs2Bum5hEDQ2YMqHlkzFsw95PyrjOOt/vbnk7T8TXrcRWhTU5sN2Rch1sHI2J+NJxB0pNbIAPWuOXjuDJzj3/gaVzFOwhmJBMmevX51nD229obAgfGmHEGhsYSIU4Hxe/hrmfD3GtOwy5ljQE+Y/rWpnazjeLxDIMVca4yA5GbSUMAeEHKNQdYkzqTAgXw6C2QxlaZn0JB8taJNcFoLdUKrK2VT7TSB7bTpz+QpwvcmAsOgG8gjg17Jn7twJgFhlnSdJ3qN3xEqR5EHTXnNX98RfxGHF04xnMklSghZMQSBoSBVax2OtXGzXEGdtWYMTJ5EbEehqnL9Yms+JE4DxHunAj2iAT5QQPma04pbyMRuAR7jvBprEXrYEIuv3uY9KirdIJO87zrPrSkldrjUG3Ik/g3EltXkuMCQpkgRPumvUPZTFEYa0wtx3lvvSGMMQYgHzgjSvKt3D6Zk1XmDup6H8jXfezGJuLgEuXHLZrNj2idG1MjoYjbpQyZiFpoUwBm1DtCz8SxAuva8DWhFzLJDQTqo30GRj7xUH6XuH27nDc9q0C9plA8MMqscrAj1YH3TWcbxbuLF25dgyjHMu+imMo1jUkHy2q29nov4cd7bmQCc/2pAePMCQOhymufDupuWy/CwqeWuBcSfD30ZswVdWEQSsecTPnV2P0kWP7K7/6f91dr7adkbHELPd3FGYey40ZOhX3xoeU15T4tw58PfuWX9q2zKehjmPIjX311pkZRQnMyBjvO74LiCDQAyyBzJmBA0+dROOYoKFc+Y29+vwqQLKLl2HgST5aae+KD9pvFZuQGMRqoJAPrXt7ATyTuZXV+kK5aa7bSwpNxGtKzMfDnEBoA1Inapv07Ypl4hYOxXDJr1lrk+lVbh2D7/ilhFGYNesjlsMpby2Bo79L1vFYjH3Lly13dq2O6Rh4hkQkyxH2iWJj8YmvDzEljc9VFoCa2O0TnD22twSzZGB3mND6DWr39K/ELuC4dhu4Z7d1nQG4kCVyOSs+oGlcO4VjGtuqkkKSJEbTzArsv/wAQGLU4PBIpBzOW9yoB/qrnw4QrbdzHucrvdruIOjK2JuFWHiEjUesTUvBfSFxO0iol85EAUDu7ZAA9kE5JO3XlQLA4XPMz7uZ6V0fC9hbz8Me/bIREzXVGQtdux9htgApzAETO+groyEA0vzluQwQO3Q9IW7A9uHx99rWIW0jgG4GUsmeIBGsgNzkb+6onadXweIS4gD2410M22nTPOniE67ETXMeF8SaxfS8hIZGBGgPqPeNPfXaLGJv4nC98RCs2YystB+z0gBoOkgg1y5UHiIN4Mv4e0Sl5G8F32GkHLIOp8hqD6GsWLr20ZmNvPbZrZkiRoCCDzBkfGo/HcOO7ZbWWytqbgCgv4drgA3A3fSdmgcqpF/ily24Mh7YPhcGVMadPxg1zjEvULvFZW8y1Z8ReIKiJMLmjLJMDQ+frR3sx9Eq3na5iMyhCMpUiLjiCYEa2+XIzNc64dxxmxdgjQ99bnXcFhIPKvTXEOK28Ph8zNB7uVEEyY8h1Pzq2FAq9KmAPznG8P2DvYjFPYcpblyCbQ2tITLE7EmdJ5tVp+kPsDhrOCe9hV7ruhndEOlxBAbNM65ddN499HOxd53xmJZ1I/d2SCToc2aSOklSTy1oj204zbtYe8l23ccOjrlQLOUiCfEwBieR91WKKux6RlZmNjqZ5v4h2X/eMbF2y1ombZa4obIdVzDkQDB9KVSuB4zDLZQXLjKwzSNNPEfyrNdXLTzEudn7UWrFqyLzuttUmQdBnPtAARpzEanSvPXH8VbuX7j2gQjEGDuTzPvOvvp7gNpLt3u7n2gQDMSw2JJqI1kd6yxIBI0+A2psjFsY/OSRQrGQSZrFFhh7cgEAa9SPXnTHE7dtcuSOc6z0rn07XKat6i4Sym4qv7J0B6GDHzirb2AwWFxFy6mJWYWUOxJ5AEggczVMwySVE6k/CKMcC45cwwuMEVlbTxA+FxqrAj8NqSt497SPxW2lnGMEUuiXBCnTOARI02kgjTrVhs8Nt8QZW/wCCWZjG6jbTy0G9VLE4vO3eMTnLFmgQBzEe8mj2C41btW1NsnOo6RE6EztzrpxAG7knJHSDsVYfDsRJEEg+0Nid4MGRB99Q7WQGbgJmIUH8T0o7iuPF7y3oGeIY5bZzAyNRz0qv4oBnhBExGgGp9OVZtoVlksYO3ljKMp1ih2I4UveZlMKIJG/npRrA2zlAbcKAY2moSktJ93w0q2RbUQAyJh74t3AwVWgZirCVZeYYdDXXuF8bs3uGhMPlzWyrBCc2UrIKHNvCmZGsCuM4Rs9xpG2h9NhV7+jFRat35Bzq8LtDKyiR8ADXOcWsD5xuZouFsRxi5iALLqFQt+8KakpqWABgS2gJ5AtG9brxu8MZCtcOHJVjsMgTLm3O2+g86i4LKXu5fsvGg/hB/Oq9xHtQqXAostCu6M2hDnykQD4hPlFbkLjSvW4Ezs7/ACqelcRjrVsS7ovPVgJHl1rz59IfB7V3iP7p1uLiWUypBKtorDr0I9T0qfjeKm3ZN1ySFAJ5kiBABPlVSwvaI2y2IgtcRSLJgZUdj7Zn7omPM0qnTfeOBZ3nSuAI997rBsoVzbGZfuaGZGkGRtWvHGK2XOaSAYHI9TzAHup7sfxBfqy3bnhzobhnXUsWOvPei3GyicJuXFym49vMeYJbWYkSAPwr0WyuK+U85Mas1DyZQfonwqNiMIxgt3jMNDOqXiddo0GlTu2Xao4bHXkFyJuv7S5kU+HRxoYMzIPOq72Cx64fimGtvcK21eAztC+JGCzyEl49aC9v8c9zF4p9QGxF1T5jwgD0hBXlvvU9fKd9vAEtj9q1aBeRUY6qwFu7ZudMjMBHoSKD/SljDcbDjTwoxgCIkr5kcuVU3C4t0XSSjHVWEoT5efmNasvbbGG5csFuVofYCfgBO1X4VPjnM5qQezY8arpObYmAZ8In3mvVXCsMLdu3bWMqoF6baDT3V5L4ZiNGYKSV5ifDzDaedd67F9qrzYdReJZmWRcPtDkubTUadOdTyfFkbTPRz5L4bGtjvtAvbX6McHauPigWCuS3dDYOdSR/D5cqLcH4oO7NvVTbG6iZkk6fnUnH8aNyzctXd2RwrDcmJCsT9knkIql8GvXLLMUOUtyPiEx+dA4mO08/mAQNjuJvh7jKy3UPhKh0OVhMnMd8sSPQ0D/YN1cQHwzBbTw9t9xkbUBhrIXVTIjwmrdj+Ni5dtricjsJ8MQzAnX4R8qKcW7KWe8tWSzWhpcVrDQCH1e3MROgb3MedcxQp1jh7qoJ7PdmrOIulr1hUu2xbu58O8IxzfaQ6KfIRz00rp3bTCtcwKvbQuVAlRqchgNA5xAMeRqp9m+G3cNdxXeOCFAAIPtpLFSwjRgJ23JPStP+9W5Ys2rYw7d5l8T3NEmfZTL7RjXce+igD2sbXopu8tX0fcQXEtevrBLraziRCsuZMkbiAoI9akfSTwy5fwjhCVK+IFY0XUNM+R2HSue2PpJey92/awqd5cTxKHy22ZZIciJmJEDfTWgVv6b8eWPe27D2zuqqyGP4WzGD6g1dl3poiuOqykXuA3QxgKRJgzvWad4jx6bjm2mVCxKgnUDkDSqvLSHVAgYBpG0/KpeLuBHm02hA93UfKusY36CLgzMmKEASFNqSfKc9M3voVvsi/v1lR/Z7j/Nv5VLmrRF/lF0mwZyUYt95o5w3slisTYbEWwrKskgmDvGk6HXzq1N9EVyNMSsjl3ZH+qrf2c7NYjC2ktrcU5WRtmCkqc3iHMTyrKdXWBtpxzH9n8Vhni7aNt1UXMpKkhSYBgH5b0U7EcGt4nvg7suTu2XUZYLgOWB8o15aVdO03YPHY3E3MRdv2czx4VDgBRACjToPjNSeyfYLEYQXSbtss+UaKx8IknUiQTPKhW8axUr/ANIWDwtjCotnKXa5BKxqokknry1Ec654D4fM11HtT9H+Jukd13SqCTBL77CPBQO39F2OOxs7bln/ANlUUgNcXtKdbs6EnYCRWOGj94vrVvxX0bY5AZNqNNmfbYbpTeG+j7HKQ47rQxqxj/8AGmLjYzV1mzXwiux2FDbHsD5/nRfH9i+IFMrdyQSPZbnuOVDbXYzFkhQyf8wgD5U75r6CKFlda8ys0GJOtds+hnh3ecOxFy4Z/etlJhvZRZ3qg/8Adljzr+6M8+8/lXU+zHD7mF4O+GBT6y3emMwjMxgHNt7MVBXIM2RQRUrP0R3Xxd3GCYtlhcjzMqB12AqudorVpcQ2Hts2VMR3lxSsqrEBfCfaMACeWtXT6KuB3uHte79rYFxREOCcwJ0PLbnVU4x2Uxj4q/eW2rB3Yqe9t6gmRoW0o5MhKDvBjUBzIvbS8bVnuokOdCZ8IGvSJ6Sfwqqm6DZYen4710Htj2bxWItILdsFlaSO8t+Y5t51XP8AsTxIW8ncA68rtv5+OKwNEyl1LlgML9Y4bZynTugsA7MkqZHQlfWm+0F1/wBjq0sPCoI018QGs8uelRuwvCeIYfPauWYttLAm5bOV9OjbGj3bPhuIuYBbNq1mcsoIDJ4VBzGZaOUada9IZUOMG+1TzSjLmoDuDc5Lwzh7XzDNpGug2G1E+6t622YMSZzMCSDoORHIVMwPZbiNpSBhm138Sf7qi3OxvEM0/V7nuKn/AFVQDhgg2BMs3OZySaHaCeK8Quq+QnRYiPy5ipva2+WawxEE2V/E1OPYfHuGu9yVa2VKoyy1zrESDEDQ9ajcS4BxC64a5h3tiIEghQBqa4MWRVyE3tOtixUapO7HsoXEW1gG5ZCn1k79PWulYPD5LdsdEUE+YG9cnwHAMajNltXCDocmpKzsKN8FwaArbF6/Ya20XVzuCDI8LIdhA3A+1zoZsyK232k72qXy80tofEjAeh31rlWIsXXx90Z2YredgoJMy0KFG2pYDyq+4wjD4y0yvns3SGXMd1OhV+pWdD0joaO9qLNj6tYxCW0D5rVtbigZsjMPCSOnyiuA8YD+GMB8J9JyLHYlnxC3nAzo3dXFHImQrjqCCfePOun9hEfFh7TXGV7bh7ZG8KoWNdxrtUTgvC8JiEuC6hzqoBYHYZunnpr/AAeQo5wXgWHwtxr4e4jLmMzoAREkc9ANKVuIAFMJRBqAKw92j4d3eFe5qbjKFKwJJOw+ZrnWP7HX7tu8sOIEd2CCFcGVyAb69N6N4/tddv3xl8Nu1ChjrLagtGxJP4TsKmcN4zcuFhbtDIqgqxzZWgMWJy6tAhQToCp9K87ieLfC3wAV6win6mca4ZwXE3ReXu3BtIzOHVhsQpA01bWY00BoZxLgWIsBGu2nQXBKkjQzMDyOmx1jWvRdjFNcTQqwa2CpKhWKlhBKkyF0J15jQ60mQIGXNausQC2YGHGpDQxIMAEwBqZ03qZ9tOSNS7feOuEDpPO57PYv/wC2vf8AKf8ASlXpVih1YSx3htJ5xSrfxpvT6n9o3JWWprLRAYgdDr8zrW+jSJ23FN37wC5t4G1Zwl4OMwEGvYsSdSBxjDAW7lwqpYAkGDtHODQK2x5x8P50bx+IZ0uIVIIDEcpA/HnQFEbfNc+JpkIisJIzeQ/r31hT5D5/rTeW595/iawA5+2/9e6muCPmfL4H/dQPjF8qQikiBOhI1Pv/AKmjIFz77/Af7aqvFsVq7sSYkyYkgacvIVy8W9JQ7z1PZWHXls9h9zNMPfJxFtWZsrhkIzGJ3HvmKtRwCZCk6GOs6VSOIMVy3BujKw9x/wClXkI7AEXTBAPsW9v8tLwbkqROj2xhAKuO4I+kG8d8AQCOZJjUkRH4mgpA6DWifHlYMgZy2h3CiP8AKBQXgGGN7F4hc5CqiabiTB0B2PmKlkZzlKqfvL8LjxLwgd1Brc7etQ1wjiORltnYmFJJgHkD5VY8zfdHxNUXHJCv1AJ94qy8PxVy5YW93o1TN7Cnbf11FW4fMWsN2nJ7R4NVC5EFAmq9e0hcS4i4uEKQApgCAYI0OpHWn+z/ABF7jXUuQxUgjZfCeWg1iPnQRnk6nUk+86n8jW/CbhTEpBjvFKEwD5jQ+YAqGLO3MFnYmd+bgU92ICiwLut9t5b7l4KpZgABv4j+lAsRx5p8KgDzkn8ql8fVxa1aRmE+EDr084qrm2xuWjMWw03ImSOWnMTuJ2mrcRmcOFU1OP2dwmJ8RyOL6/b9TDicbO7rI/h0IHXWZqdicSBlKwVYTO87R060N+oB2PdPbbnlBho5+E6xTvBeF3hbyXcq5bjZPtfuzqCYPXlQR8pBH3hz4+EWsnTyO+/7R8Y/WIX31tiOI5bbsFSVVm200BP5VDxtnJcK6aRt6A+fWmOz9t8TavhysC7ds6AzkEDed9TrQV8rMVuNkw8OmMZCuxr7yVa47NizcNoTcthyJAGvTcx603f4rbuKUuWEZTuCf/5qPxfC9yLVkRFu2qrofZGgmSZOlQOEkXbl9GkC2qlCqlvEdTnjYb9KR82TWUU/5Urh4Phjg5rLt179zQgviKnDE3LWZrWpKPDsg5w27LtvqPOoV3GYfGIAx7u+AVt3lg68lfUZkmOsficxt3LbLTGUTPpQjinZ5sRkezZFssQzNmUFg0GYBGgG3OlTNkb4QL9fH5zz/aPs9MJVsewbavWMnsxcvW7ZuXglxRIyjMFOmxnUSJ21neo2I4g9iy2GvXA0FLiNBE5HBYc9gPmKuCkbDaqJ9IuEnK/Ro9zCD8wPjSqxdgrGdfEezMScOSg3A/3CfZrji2cVdB8atbcQCNZIgj4fBqgXu0OKvmHKWraCCANTBOknkI39fcG7P2SlwXH8KrbBYncwp0HmFgnoD5ih/E8W90gCVGpbeBOwmugAltHYV9Z89ooUITv8bDnu0JK5y0qJLGIEeUT72PrV2tdtGS3FwC2SDCmPZIKhVVI0CmBPSqZwfAMGFmyoe8wkncW12BJHPnO2oGtXfgXZhrVvvSQbwID94J8JPiNlwCcwGslYMRpUOKxoBut+JlVh/LIvBuIOl1WcNZQgOGcHvHyyq5V3O8eLkSddqvuIxdsWzdJ0E+OPEup0G535dGqmW8Y5v9zdR1t22eLlsPqTqkxoRtMjnUwrdAS3cDPrIghBIkgtoYI3iYMD0rys4dmBK1t/n2lQxUQre4yikgXdvMb8+fWlVR4lbsd4+t/f7IQCecS0xPWlUfcvz+kTnNOqHiyEf8QfGtOFcYUMym5Ppr+FNW8Ig1CKPcP0qQF8q99cLjcmdpyIdqk7H4tWRgokkROoInnQAYVRrl1okJ6VsCeg+NdC6hInSYO7tfu/jWAi9Pmf1opmb7vzrYOenzpraLSwLiGQKWBOgMeI78udVHiuHa6hRSATEkztudquXaO8RbCxGY/Ia/jFVfAv3uJGHVSW7s3C3JQNNR6x8a4+IJdws9/2ZWHCch8/2muKtAqVExqBO8cp86O9m7/eYe2czAgFT4iPZMDY9IqDxDANaIB1kSDT/YvFpb7+05Ahw4kgaMPP+6PjS4LXJRluPC5uF1Kbog/vM8c0dRJPhnUk8z1NDOySA4jFMWKx3Q0Yr97oR0onx7EI90FCpAUDwkETJ6UOwY7rvcm90guTqdJ0HQamgzacpaHFj18Ho8gf3BjPFrwFu638LnXnvFEOFKUwFnxNLIumYxDHNtMbGgPELi3rqYXNAYg3mAJyWxrGn2jGlW7j2JtsttbYhQJ2I00C7+QNFAVRn87QZ2V3TCOxs/IbXK3fsl71kCQoZmZuQhTlB9Zj31vj/AFuKfEjBo2iIjXzn5U9gyLjOqSxtkZ4B8JIkCYjas42wfEjaGIqNEC6naMiswW+nUSzytxNXJDAbt7x+VBbvC21yENG+sEeVRrbZ8NZbmkow6chPuA+IpcNvCzdNwCcy5WXqPskelWfKHqx855mDhsmEMcbdCfhrvf7Rh0kQdCDodiGGx6girBwLi7X8OtzPrqpnKAXBI6c4Hxqu4/FBFe62gALGn+xd0WcGguAaZmbNpEnN57KefNT0oYnK3UHtTScS6h8V/pvCvElIusGmdNxHIdKhdi7pW1dIbLOJujZevmD0qZxB5usZnX15Ac/SgnZzGRbuKACTiLp15AOJPoAY9/rW5mli0nxI/6qg+n9oQ468upzZvCJOg69AKGI0THPRo5+tT+JurZGUABkDabaydI39aDcDsBrmMPMNZPycH8vgKk51MTPR4VgnDqT6fczL4VsSe5T2AwF65yUT7APNzppyG9W7jF7LbyLAGix0HL3QCKr2Eu93eTQRdItvOgP3SfQ7H160Q41ezPHSfxP5RTrm0JpXv1nPxOJ8nFoG/lG4/8AYEu4gi/bQCQQ5byH2T8QRUDtbhe8ssOqn4jxD5ijFtYYuPaIKzzy8x6Uzj0lD8f691TBqjPSZQ/wnoRX1nMlzkl3UhVt2xlgkeyrR/5vCI55/LTfhvB72JurYsjxsS91tctvXc9ANuugjfW64TgLXLd5JRGvXEZHYNkSMsZQAZIhQBtoPKblw1O5BXui90gZnUIDcjQMY0nQnYDxGvRx5Uup8XlxshIPWbdn+z2Hwdnu11Ope4wlnbmT5eXKiKWrTBTkXUA+JRPv0obhMRdcKXUgqk77Nvr7gp23aKYfHXVbMbZOZVGkwCN45xqSPKKp72gMjyjCd3D21eAiawNFG/Ll0n5U59XToPgKhC7OUkNMncbjYx5EBfn51piOIREKxmAPDzEEETuNZ06GgeMTcReVJ3cr90Uqh/tJRuvyNKt76kPJMNriU+8vwP6Vn60nVfgf0quL3mssvuUfrUm2zciD6LXPzj5H3lq9IaXGJ/QNYbGqPsk/L86Ed3cOv+g1uEu9D/lP602sn8X0Bm+UJ/Xx9w/GtRjyfsf+r+VQ1t3fu/l+dOBLn3KBZ/J+k0bvYS5d1LacgQjRsOaz571GPA2zZv3RMZcxticu8b7eVGcKDHiEGdqfrvxqCoJ6yRdul7QA3Bm/g9yFfwcVGvdmLTHMyKx0mVuHb/Hq0RSIptC3feHnZNOnUa8XtK/+x9oAgfwuP/frD8GLiCMs7xnU/EOSPdVjrIFKcSE2RHXicyigxr8zK5w7gHcLltHKJJI7y4JPMkkEk+dP3+Fu24Unr3rfnbNHQKRrMgYUekVMzo2pTvK1w/gjWM+QAG4+dib0y239joPKnH4S7HUD3XB/+sVYGNaCgcSkURHXiciuXB3lcs8Aa0SRbcgktAe3EmAd1B5Dnypu9wq59m249Tab/wBwVaytakUvIxkVUccbnViwbc9ZR8T2ce4ym4t9gpkIBZCZhqCR30sR5mPKpC8MuKScl/XeUtEGf8U9at9Yam5GPxI5M+TIbY3KwLZXdLp1JMoDqSSdmPWg/DuFGyH8V7x3Gdv3F0iSeWWeQHzq/QOlY7teg+FJ7tj8Sj8XlddBO0pWNvqYl2EADx2b66D/AAzUDhV+zaa+Wv2/3rKRHeAgAEa5rXmfhXQmtL0HwrU2V6D4Cl91x+JX+IZtHLvbbt43nP796y4jv7W8iWgEjkZg1JxGPtFie+sa8u+tj3akfhV47lTuAfUA/jSbA2SNbVvl9hf0pDwaS49rZrs19Jz3s9lW0xu30a6+ckC9adU+6EJu6adIGlTrihgYKkEcmTn5Bj+Jq2vwbDsNcPZP+Gv6VCxvZzCtvYt+4Efgax4RDJ4vaWbGxfrfmV3hnDmZCrAqSd99AUy6qTrpzG3pWcRwa41wXO9YMttbcBbuVk8UggL4WJKksNfCNuZM9jcGde5A9Gf/AHVhex+EG1qD5PcH+qqDhEE5cvEtkcuR1Nwbb4ZiBm/ehRm0JDsYAAkhrYEnoNgFEnU09xPA3HByMgOclQZ+6VVdfLKCd9KJL2cw4+y3/Nuj/XTh4HZ/8Qel+8P9dKeDS7ic3aCLCXDbljbDkHRHEAzoAzbwMxnmWPICo9+1dRki4IlAAWTMJbx7n7ukCaOtwdOT3h/j3f8AdWj8MPK5d99xz+JpfcEu95uaYPXCzOvM/aUxqdN+W3upUQ/Z7f2j/wCalS/w5PJi80w2tpRy+QrdVXkDSBPSnEP8Pzq9SkwF8jWwX1rYH+H51sG8qM0wEP8ARFbZPKtlX+EfL9KcRDyAH9elCaRH3ilFO3sM5JIUGY5ikMO/3T8RVAwiFY2BWCae+rv9002bbD7Jo6hBpMwDW4psqRuD8KyhPnW1CapvWJFObCY+VMA9a2qGpvWpNYmsMRW1TVJKEbmmCaytIgTQBmImNK1FOaUjco6oKjZra3bJBNZczW9u5AgVi202mM5DWpiCelMcc4ibVln2jn086o2H7SPd8JeVJOvKRm1PTWB765c/F8s0BZjBLlsv8etK2UzpuY0qZhsdbf2WB/GucXcXJKz4iCQB7RjltE/qKyl8WiCp1kRB56yZ9fOuMcblU/ELhKDtOohtJpi4+tUwdprpWSQBtqCCdKiXOIuXHjJG+ke4mD+FWPtBR0WLoJl+PrTZaqjhe0TAb5vI6QJ5eW+pnWpl3tcgcLk02Max76snGoRvtAcZlgM1qTTlrFowDDUHUVrdOtdga4umN5qQNaF6zm0prgqKaVa0qNwVCqMOUfKnFb0oM3FuQtE/+b+VYHFLh2tjXrNcx26y9w6KyCaAPj7+wS37x/OtBicQYjux10X9DSl1H4h9YflLJ76UedV0teO7x/d0/AVuO82Nx/nSnNjHVoaPiWDWtpqvjMPtsfU6n4Us59ffSHiMY7/aGjD5u68o66frWRfX7w+NV9WJ6T5a/hTipcPI/wCU/jFD3hOwJm0mGziE+9WpxNvqT/XpQdbVw6ZT/XqRTv1No1kHzIH5mhzyeimavWEfrFsbE+6KbbGW+p95WoacOb+H4/oK3t8KbWSvkIJ/StzHPRYfnH/2go6/L8hWjcSTf+vwpHhB3LgeifqaQ4N/4h/yj8jWvL/SJr9YjxMdPxps8UH3f6+NOpwjXW5Pu/nTn7KG48X94n8qWsx7ATWJHPEf4PkKx+0R90fAVIHDB/ZqfVnH4itzgQP/AKSn/wA0/jR05fM1iD24n0VIpt+JHovuj+dF0w6/2IH+T9a2+rL9wD3R+FDlZT+KaxK7evh5nUdN591aXMMrhVNnMqzlHdiATGaBG5irQqEco+NIzzb5MPzoe63uWgsSlr2WsEtGEAzanwkSeXTWpK9m0mRhlGkchp6TFW0W/wCI/wBetYIjdj8v0pvdR3JmuVfDcB7uctlRmUoZAbwncQZj3VFfsohM90J/vEf1zq45h9/8KTK3Jh8P51vdV8ma5RMR2FRoOWCCCD3pB01EmZI8j1NZw3YRbYORUXNqfHm19/qauzK/3l+B/wB1akP/AA/Ej8qPu61VmC5WcB2fv2tM6EGTE/1FEWwDxuJ9QaJgN5fH+VZk+XxqqJoFAzbeIJ/ZlzqP699YGAuUWJ860MbyfiaffzBQgr6lc6UqLZvWs0babSIMThlzovx/lTv7Led1HxNKlXEMCR7M1bhD/fEf3f508nBtNbhPoAP1rNKrDh8fiCzHBwdI9pvWaynDl08U9AQf1pUqPITxNZj31RB9lSfT9adGFHJR8qzSqoRR0E0cW1W4t0qVGLNslJQKVKtNF3a/1/0rHcLMwKVKtDM92vQVquUbLHpSpVppsz8oPuNZVvX40qVaaZk9PwpGlSrTTQtWDPX5fzpUq00xB60taVKtBG2z/wAPxI/I1oS/QfH+VKlRgmHzdAff/KtcnVR8BSpUsMx3Q+6PgKRH9R/OlSomaaFDzI+H86VKlQhmGApp7U/9T+tKlQhmMh/r/rSpUq00/9k="
						className="adastra-img"
						alt="adastraimg"
					/>
				</div>
				<div className="registerbanner">REGISTER</div>
				<div className="registercont">
					<div className="adasform">
						<FormInput
							color="#a90147"
							style={{
								borderColor: "#a90147",
								borderWidth: "3px",
								color: "#a90147",
							}}
							name="name"
							type="name"
							value={name}
							label="Name"
							handleChange={(e) => {
								setName(e.target.value);
							}}
							required
						/>
						<FormInput
							name="number"
							type="number"
							value={phone}
							label="Contact Number"
							color="#a90147"
							style={{
								borderColor: "#a90147",
								borderWidth: "3px",
								color: "#a90147",
							}}
							handleChange={(e) => {
								setPhone(e.target.value);
							}}
							required
						/>
						<FormInput
							name="text"
							type="text"
							value={branch}
							label="Branch"
							color="#a90147"
							style={{
								borderColor: "#a90147",
								borderWidth: "3px",
								color: "#a90147",
							}}
							handleChange={(e) => {
								setBranch(e.target.value);
							}}
							required
						/>
						<button
							className="adasbutton"
							onClick={() => {
								if (name || phone) {
									submitHandler();
								} else{
									alert("Please Enter name or Phone number.")
								}
							}}
						>
							Submit
						</button>
					</div>
					<div className="countcont">
						<div className="adascountdesc adtext">
							Registered Students
						</div>
						<div className="adascount adtext">{count}</div>
					</div>
				</div>
				<div className="registerbanner">ADASTRA 2022</div>
				<div className="adas2022li">
					<ReactPlayer
						className="adasvideo"
						muted={true}
						controls={true}
						url="https://firebasestorage.googleapis.com/v0/b/snist-stackathon.appspot.com/o/ADASTRA%202022%20AFTER%20MOVIE%20_%20IEEE%20SNIST.mp4?alt=media&token=4787b8c1-0bb0-4b89-89ba-9153ccef5c50"
					/>
					<div className="albumbutcons">
						<button
							className="adasbutton"
							onClick={() => {
								window.open(
									"https://www.facebook.com/media/set/?set=a.4766228166811387&type=3",
									"_blank",
									"noopener,noreferrer"
								);
							}}
						>
							Album 1
						</button>
						<button
							className="adasbutton"
							onClick={() => {
								window.open(
									"https://www.facebook.com/media/set/?set=a.4774835062617364&type=3",
									"_blank",
									"noopener,noreferrer"
								);
							}}
						>
							Album 2
						</button>
						<button
							className="adasbutton"
							onClick={() => {
								window.open(
									"https://www.facebook.com/media/set/?set=a.4789715574462646&type=3",
									"_blank",
									"noopener,noreferrer"
								);
							}}
						>
							Album 3
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
