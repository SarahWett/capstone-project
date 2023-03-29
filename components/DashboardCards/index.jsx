import {
  DashCardsContainer,
  StyledLink,
  DashboardCard,
} from "./DBCards.styles";

export default function DashCards({ formData, setFormData, entries }) {
  return (
    <DashCardsContainer>
      <StyledLink href="dashboard/AllEntries">
        <DashboardCard
          formData={formData}
          setFormData={setFormData}
          entries={entries}
        >
          <h2>All Entries</h2>
        </DashboardCard>
      </StyledLink>
      <StyledLink href="dashboard/Mood-Bar">
        <DashboardCard>
          <h2>Mood-Bar</h2>
        </DashboardCard>
      </StyledLink>
      <StyledLink href="dashboard/Mood-Line">
        <DashboardCard>
          <h2>Mood-Line</h2>
        </DashboardCard>
      </StyledLink>
    </DashCardsContainer>
  );
}
