export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          application_id: string
          biography: string | null
          bursary_document_url: string | null
          bursary_requested: boolean
          city: string
          collaboration_style: string | null
          country: string
          created_at: string
          cultural_leadership: string | null
          current_stage: string
          email: string
          festival_confirmed: boolean
          first_name: string
          id: string
          job_title: string | null
          last_name: string
          mailing_address: string | null
          organisation: string | null
          phone: string
          pivotal_nine_months: string | null
          practice_description: string | null
          practice_question: string | null
          primary_discipline: string | null
          professional_category: string | null
          pronouns: string | null
          reference_email: string | null
          reference_external: string | null
          reference_first_name: string | null
          reference_last_name: string | null
          reference_relationship: string | null
          reference_salutation: string | null
          research_inquiry: string | null
          residential_confirmed: boolean
          restated_question: string | null
          role_title: string | null
          status: Database["public"]["Enums"]["application_status"]
          time_commitment_confirmed: boolean
          turning_point: string | null
          updated_at: string
          work_sample_description: string | null
          work_sample_url: string | null
          years_experience: string | null
          years_in_culture: string | null
        }
        Insert: {
          application_id?: string
          biography?: string | null
          bursary_document_url?: string | null
          bursary_requested?: boolean
          city: string
          collaboration_style?: string | null
          country: string
          created_at?: string
          cultural_leadership?: string | null
          current_stage?: string
          email: string
          festival_confirmed?: boolean
          first_name: string
          id?: string
          job_title?: string | null
          last_name: string
          mailing_address?: string | null
          organisation?: string | null
          phone: string
          pivotal_nine_months?: string | null
          practice_description?: string | null
          practice_question?: string | null
          primary_discipline?: string | null
          professional_category?: string | null
          pronouns?: string | null
          reference_email?: string | null
          reference_external?: string | null
          reference_first_name?: string | null
          reference_last_name?: string | null
          reference_relationship?: string | null
          reference_salutation?: string | null
          research_inquiry?: string | null
          residential_confirmed?: boolean
          restated_question?: string | null
          role_title?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          time_commitment_confirmed?: boolean
          turning_point?: string | null
          updated_at?: string
          work_sample_description?: string | null
          work_sample_url?: string | null
          years_experience?: string | null
          years_in_culture?: string | null
        }
        Update: {
          application_id?: string
          biography?: string | null
          bursary_document_url?: string | null
          bursary_requested?: boolean
          city?: string
          collaboration_style?: string | null
          country?: string
          created_at?: string
          cultural_leadership?: string | null
          current_stage?: string
          email?: string
          festival_confirmed?: boolean
          first_name?: string
          id?: string
          job_title?: string | null
          last_name?: string
          mailing_address?: string | null
          organisation?: string | null
          phone?: string
          pivotal_nine_months?: string | null
          practice_description?: string | null
          practice_question?: string | null
          primary_discipline?: string | null
          professional_category?: string | null
          pronouns?: string | null
          reference_email?: string | null
          reference_external?: string | null
          reference_first_name?: string | null
          reference_last_name?: string | null
          reference_relationship?: string | null
          reference_salutation?: string | null
          research_inquiry?: string | null
          residential_confirmed?: boolean
          restated_question?: string | null
          role_title?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          time_commitment_confirmed?: boolean
          turning_point?: string | null
          updated_at?: string
          work_sample_description?: string | null
          work_sample_url?: string | null
          years_experience?: string | null
          years_in_culture?: string | null
        }
        Relationships: []
      }
      nominations: {
        Row: {
          agreement_confirmed: boolean
          contact_email: string
          contact_name: string
          contact_phone: string
          contact_position: string
          created_at: string
          expected_change: string | null
          fee_confirmed: boolean
          id: string
          institution_address: string
          institution_city: string | null
          institution_country: string | null
          institution_name: string
          institution_type: string
          institution_website: string | null
          nomination_id: string
          nominee_biography: string | null
          nominee_city: string | null
          nominee_collaboration_style: string | null
          nominee_country: string | null
          nominee_cultural_leadership: string | null
          nominee_email: string
          nominee_first_name: string
          nominee_job_title: string | null
          nominee_last_name: string
          nominee_phone: string | null
          nominee_position: string
          nominee_professional_category: string | null
          nominee_research_inquiry: string | null
          nominee_submitted_at: string | null
          nominee_token: string
          nominee_years_at_institution: string
          nominee_years_experience: string | null
          participation_confirmed: boolean
          po_number: string | null
          programme_confirmed: boolean
          signatory_date: string | null
          signatory_name: string | null
          status: Database["public"]["Enums"]["nomination_status"]
          time_commitment_confirmed: boolean
          updated_at: string
          why_nominating: string | null
        }
        Insert: {
          agreement_confirmed?: boolean
          contact_email: string
          contact_name: string
          contact_phone: string
          contact_position: string
          created_at?: string
          expected_change?: string | null
          fee_confirmed?: boolean
          id?: string
          institution_address: string
          institution_city?: string | null
          institution_country?: string | null
          institution_name: string
          institution_type: string
          institution_website?: string | null
          nomination_id?: string
          nominee_biography?: string | null
          nominee_city?: string | null
          nominee_collaboration_style?: string | null
          nominee_country?: string | null
          nominee_cultural_leadership?: string | null
          nominee_email: string
          nominee_first_name: string
          nominee_job_title?: string | null
          nominee_last_name: string
          nominee_phone?: string | null
          nominee_position: string
          nominee_professional_category?: string | null
          nominee_research_inquiry?: string | null
          nominee_submitted_at?: string | null
          nominee_token?: string
          nominee_years_at_institution: string
          nominee_years_experience?: string | null
          participation_confirmed?: boolean
          po_number?: string | null
          programme_confirmed?: boolean
          signatory_date?: string | null
          signatory_name?: string | null
          status?: Database["public"]["Enums"]["nomination_status"]
          time_commitment_confirmed?: boolean
          updated_at?: string
          why_nominating?: string | null
        }
        Update: {
          agreement_confirmed?: boolean
          contact_email?: string
          contact_name?: string
          contact_phone?: string
          contact_position?: string
          created_at?: string
          expected_change?: string | null
          fee_confirmed?: boolean
          id?: string
          institution_address?: string
          institution_city?: string | null
          institution_country?: string | null
          institution_name?: string
          institution_type?: string
          institution_website?: string | null
          nomination_id?: string
          nominee_biography?: string | null
          nominee_city?: string | null
          nominee_collaboration_style?: string | null
          nominee_country?: string | null
          nominee_cultural_leadership?: string | null
          nominee_email?: string
          nominee_first_name?: string
          nominee_job_title?: string | null
          nominee_last_name?: string
          nominee_phone?: string | null
          nominee_position?: string
          nominee_professional_category?: string | null
          nominee_research_inquiry?: string | null
          nominee_submitted_at?: string | null
          nominee_token?: string
          nominee_years_at_institution?: string
          nominee_years_experience?: string | null
          participation_confirmed?: boolean
          po_number?: string | null
          programme_confirmed?: boolean
          signatory_date?: string | null
          signatory_name?: string | null
          status?: Database["public"]["Enums"]["nomination_status"]
          time_commitment_confirmed?: boolean
          updated_at?: string
          why_nominating?: string | null
        }
        Relationships: []
      }
      track3_applications: {
        Row: {
          application_id: string
          city: string
          country: string
          created_at: string
          current_stage: string
          email: string
          festival_confirmed: boolean
          first_name: string
          id: string
          last_name: string
          mailing_address: string
          organisation: string | null
          phone: string
          pivotal_nine_months: string | null
          practice_description: string | null
          practice_question: string | null
          primary_discipline: string | null
          pronouns: string | null
          reference_email: string | null
          reference_external: string | null
          reference_first_name: string | null
          reference_last_name: string | null
          reference_relationship: string | null
          reference_salutation: string | null
          residential_confirmed: boolean
          restated_question: string | null
          role_title: string
          status: Database["public"]["Enums"]["application_status"]
          time_commitment_confirmed: boolean
          turning_point: string | null
          updated_at: string
          work_sample_description: string | null
          work_sample_url: string | null
          years_in_culture: string
        }
        Insert: {
          application_id?: string
          city: string
          country: string
          created_at?: string
          current_stage?: string
          email: string
          festival_confirmed?: boolean
          first_name: string
          id?: string
          last_name: string
          mailing_address: string
          organisation?: string | null
          phone: string
          pivotal_nine_months?: string | null
          practice_description?: string | null
          practice_question?: string | null
          primary_discipline?: string | null
          pronouns?: string | null
          reference_email?: string | null
          reference_external?: string | null
          reference_first_name?: string | null
          reference_last_name?: string | null
          reference_relationship?: string | null
          reference_salutation?: string | null
          residential_confirmed?: boolean
          restated_question?: string | null
          role_title: string
          status?: Database["public"]["Enums"]["application_status"]
          time_commitment_confirmed?: boolean
          turning_point?: string | null
          updated_at?: string
          work_sample_description?: string | null
          work_sample_url?: string | null
          years_in_culture: string
        }
        Update: {
          application_id?: string
          city?: string
          country?: string
          created_at?: string
          current_stage?: string
          email?: string
          festival_confirmed?: boolean
          first_name?: string
          id?: string
          last_name?: string
          mailing_address?: string
          organisation?: string | null
          phone?: string
          pivotal_nine_months?: string | null
          practice_description?: string | null
          practice_question?: string | null
          primary_discipline?: string | null
          pronouns?: string | null
          reference_email?: string | null
          reference_external?: string | null
          reference_first_name?: string | null
          reference_last_name?: string | null
          reference_relationship?: string | null
          reference_salutation?: string | null
          residential_confirmed?: boolean
          restated_question?: string | null
          role_title?: string
          status?: Database["public"]["Enums"]["application_status"]
          time_commitment_confirmed?: boolean
          turning_point?: string | null
          updated_at?: string
          work_sample_description?: string | null
          work_sample_url?: string | null
          years_in_culture?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_application_id: { Args: never; Returns: string }
      generate_nomination_id: { Args: never; Returns: string }
      generate_track3_application_id: { Args: never; Returns: string }
    }
    Enums: {
      application_status:
        | "draft"
        | "submitted"
        | "under_review"
        | "accepted"
        | "rejected"
      nomination_status:
        | "draft"
        | "nomination_submitted"
        | "nominee_invited"
        | "nominee_submitted"
        | "under_review"
        | "accepted"
        | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: [
        "draft",
        "submitted",
        "under_review",
        "accepted",
        "rejected",
      ],
      nomination_status: [
        "draft",
        "nomination_submitted",
        "nominee_invited",
        "nominee_submitted",
        "under_review",
        "accepted",
        "rejected",
      ],
    },
  },
} as const
