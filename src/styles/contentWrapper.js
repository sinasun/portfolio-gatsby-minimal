import styled from 'styled-components';

const ContentWrapper = styled.div`
	max-width: ${({ theme }) => theme.pageWidth};
	margin: 0 auto;
	padding: 0 2.5rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0 1.5rem;
	}
`;
export default ContentWrapper;
